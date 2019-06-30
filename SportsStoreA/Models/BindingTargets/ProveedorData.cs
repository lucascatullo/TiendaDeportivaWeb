
using System.ComponentModel.DataAnnotations;


namespace SportsStoreA.Models.BindingTargets
{
    public class ProveedorData
    {
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Ciudad { get; set; }
        [Required]
        public string Provincia { get; set; }

        public Proveedor Proovedor => new Proveedor
        {
            Nombre = Nombre,
            Ciudad = Ciudad,
            Provincia = Provincia
        };
    }
}
