using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreA.Models.BindingTargets
{
    public class CheckoutEstado
    {
        public string nombre { get; set; }
        public string direccion { get; set; }
        public string numeroTarjeta { get; set; }
        public string vencimientoTarjeta { get; set; }
        public string codigoSeguridadTarjeta { get; set; }
    }
}
