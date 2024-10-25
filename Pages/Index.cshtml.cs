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
        public IList<StopStationCombined> CombinedTable { get; set; }

        //fetch all stations from the database
        public async Task OnGetAsync()
        {
            //this uses traditional sql
            CombinedTable = await (from station in _context.Stations
                                   join stop in _context.Stops
                                   on station.Station_ID equals stop.Station_ID
                                   join stopDetail in _context.StopDetails
                                   on stop.Stop_ID equals stopDetail.Stop_ID
                                   join line in _context.Lines
                                   on stopDetail.Line_ID equals line.Line_ID
                                   select new StopStationCombined
                                   {
                                       Station_ID = station.Station_ID,
                                       Station_Name = station.Station_Name,
                                       lon = stop.Longitude,
                                       lat = stop.Latitude,
                                       ADA = stop.ADA,
                                       color = line.Color,
                                   }
                                   ).ToListAsync();
                                   
        }


        //search database and return all stations whos name contains the search term
        public async Task<IActionResult> OnGetSearch(string query)
        {
            if (string.IsNullOrEmpty(query))
            {
                return new JsonResult(new List<object>()); //return an empty list
            }

            //this is a c# sql query (can see similarities)
            var results = await _context.Stations.Where(s => s.Station_Name.Contains(query)).ToListAsync();

            return new JsonResult(results);
        }
    }
}
