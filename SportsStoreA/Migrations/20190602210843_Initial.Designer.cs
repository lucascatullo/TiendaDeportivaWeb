﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SportsStoreA.Models;

namespace SportsStoreA.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190602210843_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SportsStoreA.Models.Producto", b =>
                {
                    b.Property<long>("ProductoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Categoria");

                    b.Property<string>("Descripcion");

                    b.Property<string>("Nombre");

                    b.Property<decimal>("Precio");

                    b.Property<long?>("ProveedorId");

                    b.HasKey("ProductoId");

                    b.HasIndex("ProveedorId");

                    b.ToTable("Productos");
                });

            modelBuilder.Entity("SportsStoreA.Models.Proveedor", b =>
                {
                    b.Property<long>("ProveedorId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Ciudad");

                    b.Property<string>("Nombre");

                    b.Property<string>("Provincia");

                    b.HasKey("ProveedorId");

                    b.ToTable("Proveedores");
                });

            modelBuilder.Entity("SportsStoreA.Models.Rating", b =>
                {
                    b.Property<long>("RatingID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long?>("ProductosProductoId");

                    b.Property<int>("Stars");

                    b.HasKey("RatingID");

                    b.HasIndex("ProductosProductoId");

                    b.ToTable("Ratings");
                });

            modelBuilder.Entity("SportsStoreA.Models.Producto", b =>
                {
                    b.HasOne("SportsStoreA.Models.Proveedor", "Proveedor")
                        .WithMany("Productos")
                        .HasForeignKey("ProveedorId");
                });

            modelBuilder.Entity("SportsStoreA.Models.Rating", b =>
                {
                    b.HasOne("SportsStoreA.Models.Producto", "Productos")
                        .WithMany("Ratings")
                        .HasForeignKey("ProductosProductoId");
                });
#pragma warning restore 612, 618
        }
    }
}
