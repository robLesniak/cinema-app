using Microsoft.EntityFrameworkCore;

namespace BaseAPI.Models
{
    public class ClientsContext : DbContext
    {
        public ClientsContext(DbContextOptions<ClientsContext> options) : base(options) { }

        public DbSet<Client> customers { get; set; }
    }
}
