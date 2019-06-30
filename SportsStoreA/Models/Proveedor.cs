using System.Collections.Generic;


namespace SportsStoreA.Models
{

   
    public class Proveedor
    {
       
        
        public long ProveedorId { get; set; }

        public string Nombre { get; set; }
        public string Ciudad { get; set; }
        public string Provincia { get; set; }

        public  IEnumerable<Producto> Productos { get; set; }
    }
}
