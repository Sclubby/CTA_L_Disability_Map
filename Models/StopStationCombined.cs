namespace CTA_Database_Website.Models
{
    using System.ComponentModel.DataAnnotations;
    public class StopStationCombined
    {
        [Key]
        public int Station_ID { get; set; }
        public string Station_Name { get; set; }
        public double lat { get; set; }
        public double lon { get; set; }
    }
}
