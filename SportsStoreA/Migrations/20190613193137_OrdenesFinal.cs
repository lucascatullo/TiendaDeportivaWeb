using Microsoft.EntityFrameworkCore.Migrations;

namespace SportsStoreA.Migrations
{
    public partial class OrdenesFinal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Ordenes",
                newName: "Nombre");

            migrationBuilder.AlterColumn<string>(
                name: "CodigoAuth",
                table: "Pago",
                nullable: true,
                oldClrType: typeof(string));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Nombre",
                table: "Ordenes",
                newName: "Name");

            migrationBuilder.AlterColumn<string>(
                name: "CodigoAuth",
                table: "Pago",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
