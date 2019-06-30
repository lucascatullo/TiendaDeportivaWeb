using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsStoreA.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace SportsStoreA.Controllers
{
    [Route("api/ordenes")]
    [Authorize(Roles = "Administrador")]
    public class OrdenValuesController : Controller
    {
        private DataContext context;

        public OrdenValuesController(DataContext context) { this.context = context; }

        [HttpGet]
        public IEnumerable<Orden> GetOrdenes()
        {
            
            return this.context.Ordenes
                .Include(o => o.pago)
                .Include(o => o.Productos).ToList();
                
        }

        [HttpPost("{id}")]
        public void MarcarEmbarcar(long id)
        {
            Orden orden = context.Ordenes.Find(id);
            if (orden != null)
            {
                orden.Embarcar = true;
                context.SaveChanges();
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult CrearOrden([FromBody]Orden orden)
        {
            if (ModelState.IsValid)
            {
                orden.OrdenId = 0;
                orden.Embarcar = false;
                orden.pago.Total = GetPrecio(orden.Productos);
                ProcesarPago(orden.pago);
                if(orden.pago.CodigoAuth!= null)
                {
                    context.Add(orden);
                    context.SaveChanges();
                    return Ok(new {
                        ordenId= orden.OrdenId,
                        codigoAuth = orden.pago.CodigoAuth,
                        precioTotal = orden.pago.Total
                    });
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        private void ProcesarPago(Pago pago)
        {
            //Integrar aqui el sistema de pagos
            pago.CodigoAuth = "12345";
        }

        private decimal GetPrecio(IEnumerable<LineaCarrito> linea)
        {
            IEnumerable<long> ids = linea.Select(l => l.ProductoId);
            return context.Productos.Where(p => ids.Contains(p.ProductoId))
                .Select(p => linea.First(l => l.ProductoId == p.ProductoId)
                .Cantidad * p.Precio).Sum();
        }
    }
}
