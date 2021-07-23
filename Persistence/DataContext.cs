using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //This creates our table. Our entity is Activity, and our table name is therefore Activities
        public DbSet<Activity> Activities { get; set; }
    }
}