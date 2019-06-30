using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace SportsStoreA.Models
{
    public class IdentitySeedData
    {
        private const string adminUser = "Admin";
        private const string adminPasswd = "Secreto1234*";
        private const string adminRole = "Administrador";

        public static async void SeedDataBase(IApplicationBuilder app)
        {
            (GetAppService<IdentityDataContext>(app)).Database.Migrate();
            UserManager<IdentityUser> userManager = 
                GetAppService<UserManager<IdentityUser>>(app);
            RoleManager<IdentityRole> roleManager =
                GetAppService<RoleManager<IdentityRole>>(app);

            IdentityRole role = await roleManager.FindByNameAsync(adminRole);
            IdentityUser user = await userManager.FindByNameAsync(adminUser);

            if (role == null)
            {
                role = new IdentityRole(adminRole);
                IdentityResult result = await roleManager.CreateAsync(role);
                if (!result.Succeeded)
                {
                    throw new Exception("No se pudo crear el rol "
                        + result.Errors.FirstOrDefault());
                }
            }
            if (user == null)
            {
                user = new IdentityUser(adminUser);
                IdentityResult result =
                    await userManager.CreateAsync(user, adminPasswd);
                if (!result.Succeeded)
                {
                    throw new Exception("No se pudo crear usuario: "
                        + result.Errors.FirstOrDefault());
                }
            }
            if(!await userManager.IsInRoleAsync(user,adminRole))
            {
                IdentityResult result =
                    await userManager.AddToRoleAsync(user, adminRole);
                if (!result.Succeeded)
                {
                    throw new Exception("No se pudo añadir usuario al rol: "
                        + result.Errors.FirstOrDefault());
                }
            }
        }

        private static T GetAppService<T>(IApplicationBuilder app)
        {
            return app.ApplicationServices.GetRequiredService<T>();
        }
    }
}
