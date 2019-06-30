
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SportsStoreA.Models;
using Microsoft.AspNetCore.Identity;

namespace SportsStoreA
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            
        }

        public IConfiguration Configuration { get; }

        [System.Obsolete]
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<IdentityDataContext>(options =>
            options.UseSqlServer(Configuration["Data:Identity:ConnectionString"]));

            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<IdentityDataContext>();

            services.AddDbContext<DataContext>(options =>options
            .UseSqlServer(Configuration["Data:SportStoreProducts:ConnectionString"]));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddJsonOptions(
                opts=> 
                opts.SerializerSettings.ReferenceLoopHandling=
                Newtonsoft.Json.ReferenceLoopHandling.Serialize);
            services.AddSession(options =>
            {
                options.CookieName = "TiendaDeportiva.Session";
                options.IdleTimeout = System.TimeSpan.FromHours(48);
                options.CookieHttpOnly = false;
            });
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

        
            app.UseDeveloperExceptionPage();
            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseSession();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
                routes.MapSpaFallbackRoute("angular-fallback", new { controller = "Home", action = "Index" });
            });
            IdentitySeedData.SeedDataBase(app);
            SeedData.SeedDataBase(app.ApplicationServices.GetRequiredService<DataContext>());
        }
    }
}
