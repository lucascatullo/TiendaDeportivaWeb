
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsStoreA.Models;
using System.Linq;

namespace SportsStoreA.Controllers
{
    
    public class HomeController : Controller
    {
        DataContext context;
        public HomeController(DataContext cont)
        {
            this.context = cont;

        }

        [Authorize]
        public string Protegido()
        {
            return "Estas protegido";
        }


        public IActionResult Index()
        {
            return View(context.Productos.First());
        }
    }
}
