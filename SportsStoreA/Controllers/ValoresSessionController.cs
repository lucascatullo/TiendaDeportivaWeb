using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SportsStoreA.Models;
using SportsStoreA.Models.BindingTargets;

namespace SportsStoreA.Controllers
{
    [Route("/api/session")]
    public class ValoresSessionController : Controller
    {
        [HttpGet("carrito")]
        public IActionResult GetCarrito()
        {
            return Ok(HttpContext.Session.GetString("carrito"));
        }

        [HttpGet("checkout")]
        public IActionResult GetCheckout()
        {
            return Ok(HttpContext.Session.GetString("checkout"));
        }

        [HttpPost("checkout")]
        public void GuardarCheckout([FromBody] CheckoutEstado data)
        {
            HttpContext.Session.SetString("checkout", JsonConvert.SerializeObject(data));
        }

        [HttpPost("carrito")]
        public void GuardarCarrito([FromBody] SeleccionProducto[] productos)
        {
            var JsonData = JsonConvert.SerializeObject(productos);
            HttpContext.Session.SetString("carrito", JsonData);
        }
    }
}
