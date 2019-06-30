using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace SportsStoreA.Controllers
{
    public class AccountController : Controller
    {
        private UserManager<IdentityUser> userManager;
        private SignInManager<IdentityUser> signInManager;

        public AccountController(UserManager<IdentityUser> userM,
            SignInManager<IdentityUser> signM)
        {
            this.userManager = userM;
            this.signInManager = signM;
        }

        [HttpPost("/api/account/login")]
        public async Task<IActionResult> Login([FromBody] LogInViewModel vModel)
        {
            if (ModelState.IsValid && await DoLogin(vModel))
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost("/api/account/logout")]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }

        [HttpGet]
        public IActionResult Login(string returnUrl)
        {
            ViewBag.returnUrl = returnUrl;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LogInViewModel cred, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                if (await DoLogin(cred))
                {
                    return Redirect(returnUrl ?? "/");
                }
                else
                {
                    ModelState.AddModelError("", "Nombre o contraseña invalidos");
                }
            }
            return View(cred);
        }

        [HttpPost]
        public async Task<IActionResult> LogOut(string returnUrl)
        {
            await signInManager.SignOutAsync();
            return Redirect(returnUrl ?? "/");
        }


        private async Task<bool> DoLogin(LogInViewModel vModel)
        {
            IdentityUser user = await userManager.FindByNameAsync(vModel.Nombre);
            if (user != null)
            {
                await signInManager.SignOutAsync();
                Microsoft.AspNetCore.Identity.SignInResult result = await
                    signInManager
                    .PasswordSignInAsync(user, vModel.Password, false, false);
                return result.Succeeded;
            }
            else
            {
                return false;
            }
        }

        public class LogInViewModel
        {
            [Required]
            public string Nombre { get; set; }
            [Required]
            public string Password { get; set; }
        }
    }
}
