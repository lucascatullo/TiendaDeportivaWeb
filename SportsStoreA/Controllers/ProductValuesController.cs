using Microsoft.AspNetCore.Mvc;
using SportsStoreA.Models;
using SportsStoreA.Models.BindingTargets;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Authorization;

namespace SportsStoreA.Controllers
{
    [Route("api/productos")]
    [Authorize(Roles ="Administrador")]
    public class ProductValuesController: Controller
    {
        private DataContext context;

        public ProductValuesController(DataContext cont)
        {
            context = cont;
        }

        [HttpDelete("{id}")]
        public void  EliminarProducto(long id)
        {
            context.Productos.Remove(new Producto { ProductoId = id });
            context.SaveChanges();
        }

        [HttpPatch("{id}")]
        public IActionResult ActualizarProducto(long id, [FromBody]JsonPatchDocument<ProductoData> pdata)
        {
            context.Proveedores.Load();
            
            Producto producto = context.Productos.Include(p=> p.Proveedor).First(p=> p.ProductoId == id);
            ProductoData data = new ProductoData { Producto = producto };
            pdata.ApplyTo(data,ModelState);
            if (ModelState.IsValid && TryValidateModel(data))
            {
                if (producto.Proveedor != null && producto.Proveedor.ProveedorId != 0)
                {
                    context.Attach(producto.Proveedor);
                }
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetProductos(string categoria, string busqueda,
            bool relacionado = false, bool metadata = false)
        {
 
            IQueryable<Producto> query = context.Productos;

            if (!string.IsNullOrWhiteSpace(categoria))
            {
                string catLower = categoria.ToLower();
                query = query.Where(p => p.Categoria.ToLower().Contains(catLower));
            }
            if (!string.IsNullOrWhiteSpace(busqueda))
            {
                string busquedalow = busqueda.ToLower();
                query = query.Where(p => p.Nombre.ToLower().Contains(busqueda));
            }
            if (relacionado && HttpContext.User.IsInRole("Administrador"))
            {
                context.Proveedores.Load();
                context.Ratings.Load();
                query = query.Include(p => p.Proveedor).Include(p=> p.Ratings);
                List<Producto> data = query.ToList();
            
                data.ForEach(p =>
                {

                    if (p.Proveedor != null)
                    {
                        p.Proveedor.Productos = null;
                    }
                    if(p.Ratings != null)
                    {
                        p.Ratings.ForEach(r => r.Producto = null);
                    }
                }

                );
                return metadata ? CrearMetaData(data) : Ok(data);
            }
            else
            {
                return metadata ? CrearMetaData(query) : Ok(query);
            }
                    
        }

        public IActionResult CrearMetaData(IEnumerable<Producto> productos) {
            return Ok(new
            {
                data = productos,
                categorias = context.Productos.Select(p => p.Categoria)
                .Distinct().OrderBy(c => c)
            }) ;

        }


        [HttpGet("{id}")]
        [AllowAnonymous]
        public Producto GetProducto(long id)
        {

            context.Proveedores.Load();

            Producto producto = context.Productos
                .Include(p => p.Proveedor)
                .Include(p=> p.Ratings)
                .First(p => p.ProductoId == id);
        
            if(producto.Proveedor!= null)
            {
                producto.Proveedor.Productos = null; 
            }
            return producto;
           
        }
        [HttpPost]
        public IActionResult CrearProductos([FromBody]ProductoData pdata)
        {
            if (ModelState.IsValid)
            {
                Producto p = pdata.Producto;
                if(p.Proveedor!= null && p.Proveedor.ProveedorId != 0)
                {
                    context.Attach(p.Proveedor);
                }
                context.Add(p);
                context.SaveChanges();
                return Ok(p.ProductoId);
            }
            else
            {
                return BadRequest(ModelState);
            }

        }

        [HttpPut("{id}")]
        public IActionResult RemplazarProducto(long id, [FromBody]ProductoData pdata)
        {
            if (ModelState.IsValid)
            {
                Producto p = pdata.Producto;
                p.ProductoId = id; 
                if(p.Proveedor != null && p.Proveedor.ProveedorId != 0)
                {
                    context.Attach(p.Proveedor);
                }
                context.Update(p);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }


}
