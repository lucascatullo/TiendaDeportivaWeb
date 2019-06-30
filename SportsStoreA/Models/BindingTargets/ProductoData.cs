using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreA.Models.BindingTargets
{
    public class ProductoData
    {
        [Required]
        public string Nombre { get => Producto.Nombre; set => Producto.Nombre = value; }

        [Required]
        public string Categoria { get=> Producto.Categoria ; set=> Producto.Categoria = value; }

        [Required]
        public string Descripcion { get=> Producto.Descripcion; set=> Producto.Descripcion = value; }

        [Range(1, int.MaxValue,ErrorMessage ="El precio tiene que ser al menos 1")]
        public decimal Precio { get=> Producto.Precio; set=> Producto.Precio=value; }

        public long? Proveedor
        {
            get => Producto.Proveedor?.ProveedorId ?? null;
            set
            {
                if (!value.HasValue)
                {
                    Producto.Proveedor = null;
                }
                else
                {
                    if (Producto.Proveedor == null)
                    {
                        Producto.Proveedor = new Proveedor();
                    }
                    Producto.Proveedor.ProveedorId = value.Value;
                }
            }
        }

        public Producto Producto { get; set; } = new Producto();


        
       
    }
}
