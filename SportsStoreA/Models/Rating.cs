

namespace SportsStoreA.Models
{

  
    public class Rating
    {
       

        public long RatingID { get; set; }

        public int Stars { get; set; }
        public  Producto Producto { get; set; }
    }
}
