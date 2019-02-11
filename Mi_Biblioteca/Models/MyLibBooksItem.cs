using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mi_Biblioteca.Models
{
 
        public class MyLibBooksItem
        {
            public int Pk_Id { get; set; }
            public string Title { get; set; }
            public string Authors { get; set; }
            public string Description { get; set; }
            public string Categories { get; set; }
            public int userId { get; set; }
            public int read { get; set; }
            // public int WishListId { get; set; }
            public string ImageLink { get; set; }
        }
}
