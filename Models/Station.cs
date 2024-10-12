namespace CTA_Database_Website.Models
{
    using System.ComponentModel.DataAnnotations;
    public class Station
    {
        [Key]
        public int Station_ID { get; set; }
        public string Station_Name { get; set;  }

    }
}
