using Microsoft.EntityFrameworkCore.Migrations;

namespace SportsStoreA.Migrations
{
    public partial class ChangeDeleteBehavior : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Productos_Proveedores_ProveedorId",
                table: "Productos");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Productos_ProductosProductoId",
                table: "Ratings");

            migrationBuilder.RenameColumn(
                name: "ProductosProductoId",
                table: "Ratings",
                newName: "ProductoId");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_ProductosProductoId",
                table: "Ratings",
                newName: "IX_Ratings_ProductoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Productos_Proveedores_ProveedorId",
                table: "Productos",
                column: "ProveedorId",
                principalTable: "Proveedores",
                principalColumn: "ProveedorId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Productos_ProductoId",
                table: "Ratings",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "ProductoId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Productos_Proveedores_ProveedorId",
                table: "Productos");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Productos_ProductoId",
                table: "Ratings");

            migrationBuilder.RenameColumn(
                name: "ProductoId",
                table: "Ratings",
                newName: "ProductosProductoId");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_ProductoId",
                table: "Ratings",
                newName: "IX_Ratings_ProductosProductoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Productos_Proveedores_ProveedorId",
                table: "Productos",
                column: "ProveedorId",
                principalTable: "Proveedores",
                principalColumn: "ProveedorId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Productos_ProductosProductoId",
                table: "Ratings",
                column: "ProductosProductoId",
                principalTable: "Productos",
                principalColumn: "ProductoId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
