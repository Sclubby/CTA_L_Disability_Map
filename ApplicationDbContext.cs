namespace CTA_Database_Website
{
    using Microsoft.EntityFrameworkCore;
    using System.Diagnostics;
    using static System.Collections.Specialized.BitVector32;
    using CTA_Database_Website.Models;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Station> Stations { get; set; }
        public DbSet<Stop> Stops { get; set; }
        public DbSet<Line> Lines { get; set; }

        public DbSet<StopDetail> StopDetails { get; set; }
        public DbSet<Ridership> Riderships { get; set; }

        public DbSet<StopStationCombined> StatesCombined { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ridership>(entity =>
            {
                entity.HasNoKey();
                entity.ToTable("Riderships");
            });
            modelBuilder.Entity<StopDetail>(entity =>
            {
                entity.HasNoKey();
                entity.ToTable("StopDetails");
            });
        }
    }
     
}
