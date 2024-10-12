using System.ComponentModel.DataAnnotations.Schema;

namespace CTA_Database_Website.Models
{
    public class Ridership
    {
        [ForeignKey("Station_ID")]
        public int Station_ID { get; set; }
        public string Ride_Date { get; set; }
        public string Type_of_Day { get; set; }
        public int Num_riders { get; set; }
    }
}
