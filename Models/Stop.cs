namespace CTA_Database_Website.Models
{
    using System.ComponentModel.DataAnnotations;
    public class Stop
    {
        [Key]
        public int Stop_ID { get; set; }
        public int Station_ID { get; set; }
        public string Stop_Name { get; set; }
        public string Direction { get; set; }
        public int ADA { get; set; }
        public double Lat { get; set; }
        public double lon { get; set; }
    }
}
