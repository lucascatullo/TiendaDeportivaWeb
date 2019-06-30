using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportsStoreA.Models
{
  
    public class Producto
    {
   
        public long ProductoId { get; set; }

        public string Nombre { get; set; }
        public string Categoria { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }

        public  Proveedor Proveedor { get; set; }
        public  List<Rating> Ratings { get; set; }
    }
}
