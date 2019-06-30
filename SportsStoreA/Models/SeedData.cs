using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace SportsStoreA.Models
{
    public class SeedData
    {
        public static void SeedDataBase(DataContext context)
        {
            context.Database.Migrate();
            if (context.Productos.Count() == 0)
            {
                var s1 = new Proveedor
                { Nombre = "Jose", Provincia = "Buenos Aires", Ciudad = "Mar del plata" };
                var s2 = new Proveedor
                { Nombre = "Juan", Provincia = "Santa fe", Ciudad = "Santa fe" };
                var s3 = new Proveedor
                { Nombre = "Lillina", Provincia = "Ravnica", Ciudad = "Dominaria" };

                context.Productos.AddRange(
                    new Producto
                    {
                        Nombre = "Kayak",
                        Categoria = "Deportes de Agua",
                        Descripcion = "Bote pero para uno.",
                        Precio = 12.5m,
                        Proveedor = s1,
                        Ratings =
                        new List<Rating> { new Rating { Stars = 4 }, new Rating { Stars = 2 } }
                    },
                    new Producto
                    {
                        Nombre ="Pelota de futbol",
                        Categoria="Futbol",
                        Descripcion="Para jugar el mejor deporte del mundo",
                        Precio = 7.50m,
                        Proveedor=s2,
                        Ratings = 
                        new List<Rating> { new Rating { Stars =5},new Rating { Stars=5} }
                    },
                    new Producto
                    {
                        Nombre="Chaqueta Salvavida",
                        Categoria="Deporte de Agua",
                        Descripcion="No mueras diviertiendote!",
                        Precio=1.50m,
                        Proveedor=s1,
                        Ratings=
                        new List<Rating> { new Rating { Stars=2},new Rating { Stars=1},new Rating { Stars=5} }
                    },
                    new Producto
                    {
                        Nombre="Bandera de corner",
                        Descripcion="Dale a tu campo un toque profesional",
                        Categoria="Futbol",
                        Precio=2.65m,
                        Proveedor=s3,
                        Ratings = new List<Rating> { new Rating { Stars=2},new Rating{Stars=3} }
                    },
                    new Producto
                    {
                        Nombre="Estadio de futbol",
                        Categoria="Futbol",
                        Descripcion="El mejor estadio del mundo",
                        Precio=100.000m,
                        Proveedor=s1,
                        Ratings= new List<Rating> { new Rating { Stars=4} }

                    },
                    new Producto
                    {
                        Nombre= "Gorra de pensar",
                        Categoria="Ajedrez",
                        Descripcion = "Mejora la eficacia la pensar 100%",
                        Precio=25.23m,
                        Proveedor=s3,
                        Ratings = new List<Rating> { new Rating {Stars = 2}, new Rating { Stars=3} }
                    },
                    new Producto
                    {
                        Nombre = "Tablero de Ajedrez",
                        Categoria="Ajedrez",
                        Descripcion="Sin fichas",
                        Precio=15.24m,
                        Proveedor=s2,
                        Ratings = new List<Rating> { new Rating { Stars=4} }
                    }
                    );
                context.SaveChanges();

            }
        }
    }
}
