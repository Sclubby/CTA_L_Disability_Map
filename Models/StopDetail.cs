using Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure;
using System.ComponentModel.DataAnnotations.Schema;

namespace CTA_Database_Website.Models
{
    public class StopDetail
    {
        [ForeignKey("Stop_ID")]
        public int Stop_ID { get; set; }
        [ForeignKey("Line_ID")]
        public int Line_ID { get; set; }
    }
}
