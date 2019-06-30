using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using SportsStoreA.Models;
using SportsStoreA.Models.BindingTargets;
using System.Collections.Generic;
using System.Data.Entity;

namespace SportsStoreA.Controllers
{

    [Route("api/proveedores")]
    [Authorize(Roles = "Administrador")]
    public class ProveedorValues : Controller
    {
        private DataContext context;

        public  ProveedorValues(DataContext cont)
        {
            context = cont;
        }

        [HttpDelete("{id}")]
        public void BorrarProveedor(long id)
        {
            context.Proveedores.Remove(new Proveedor { ProveedorId = id });
            context.SaveChanges();
        }

        [HttpGet]
        public IEnumerable<Proveedor> GetProveedores()
        {
            return context.Proveedores;
        }

        [HttpPost]
        public IActionResult CrearProveedor([FromBody]ProveedorData data)
        {
            if (ModelState.IsValid)
            {
                Proveedor p = data.Proovedor;
                context.Add(p);
                context.SaveChanges();
                return Ok(p.ProveedorId);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult RemplazarProveedor(long id , [FromBody]ProveedorData pdata)
        {
            if (ModelState.IsValid)
            {
                Proveedor p = pdata.Proovedor;
                p.ProveedorId = id;
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
