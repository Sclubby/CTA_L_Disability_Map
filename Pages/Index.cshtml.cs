using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CTA_Database_Website.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CTA_Database_Website.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public IndexModel(ApplicationDbContext context)
        {
            _context = context;
        }
        
        //holds a list of Stations that is displayed
        public IList<Station> Stations { get; set; }

        //fetch all stations from the database
        public async Task OnGetAsync()
        {
            Stations = await _context.Stations.ToListAsync();
        }
    }
}
