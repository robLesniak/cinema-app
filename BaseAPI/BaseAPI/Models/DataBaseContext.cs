using Microsoft.EntityFrameworkCore;

namespace BaseAPI.Models
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options) { }

        public DbSet<Genre> genre { get; set; }
        public DbSet<Movie> movie { get; set; }
        public DbSet<GenreMovie> movie_genre { get; set; }
    }
}
