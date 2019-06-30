using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreA.Models
{
    public class SeleccionProducto
    {
            public long productoId { get; set; }
            public string nombre { get; set; }
            public decimal precio { get; set; }
            public int cantidad { get; set; }
    }
}


