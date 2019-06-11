using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace webApi.Models
{
    public partial class webApi2BContext : DbContext
    {
        public webApi2BContext()
        {
        }

        public webApi2BContext(DbContextOptions<webApi2BContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Produto> Produto { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Server=localhost;Database=webApi2B;Port=5432;User Id=postgres;Password=jader1081;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

            modelBuilder.Entity<Produto>(entity =>
            {
                entity.HasKey(e => e.Idproduto)
                    .HasName("produto_pk");

                entity.ToTable("produto");

                entity.Property(e => e.Idproduto).HasColumnName("idproduto");

                entity.Property(e => e.Descproduto)
                    .IsRequired()
                    .HasColumnName("descproduto")
                    .HasColumnType("character varying(60)");

                entity.Property(e => e.Isativo).HasColumnName("isativo");

                entity.Property(e => e.Unidproduto)
                    .IsRequired()
                    .HasColumnName("unidproduto")
                    .HasColumnType("character varying(10)");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.Idusuario)
                    .HasName("usuario_pk");

                entity.ToTable("usuario");

                entity.Property(e => e.Idusuario).HasColumnName("idusuario");

                entity.Property(e => e.Isativo).HasColumnName("isativo");

                entity.Property(e => e.Nomeusuario)
                    .IsRequired()
                    .HasColumnName("nomeusuario")
                    .HasColumnType("character varying(60)");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasColumnType("character varying(60)");
            });
        }
    }
}
