using System.ComponentModel.DataAnnotations;

namespace CTA_Database_Website.Models
{
    public class Line
    {
        [Key]
        public int Line_ID { get; set; }
        public string Color { get; set; }
    }
}
