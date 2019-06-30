using Microsoft.EntityFrameworkCore;


namespace SportsStoreA.Models
{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions<DataContext> opts) : base(opts) {
        }

        public DbSet<Producto> Productos { get; set; }
        public DbSet<Proveedor> Proveedores { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Orden> Ordenes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Producto>().HasMany<Rating>(p => p.Ratings)
            .WithOne(r => r.Producto).OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<Producto>().HasOne<Proveedor>(p => p.Proveedor)
                .WithMany(s => s.Productos).OnDelete(DeleteBehavior.Cascade);
        }

    }
}
