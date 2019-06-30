using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace SportsStoreA.Models
{
    public class Orden
    {
       [BindNever]
       public long OrdenId { get; set; }
       [Required]
       public string Nombre { get; set; }

       
        public IEnumerable<LineaCarrito> Productos { get; set; }

        [Required]
        public string Direccion { get; set; }
        [Required]
        public Pago pago { get; set; }
        [BindNever]
        public bool Embarcar { get; set; } = false;

    }
    public class Pago
    {
        [BindNever]
        public long PagoId { get; set; }
        [Required]
        public string NumeroTarjeta { get; set; }
        [Required]
        public string VencimientoTarjeta { get; set; }
        [Required]
        public int CodigoSeguridad { get; set; }
        [BindNever]
        public decimal Total { get; set; }
        [BindNever]
        public string CodigoAuth { get; set; }
    }
    public class LineaCarrito
    {
        [BindNever]
        public long LineaCarritoId { get; set; }
        [Required]
        public long ProductoId { get; set; }
        [Required]
        public int Cantidad { get; set; }
    }
}
