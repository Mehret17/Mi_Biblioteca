using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mi_Biblioteca.DataAccess;
using Mi_Biblioteca.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Mi_Biblioteca.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksItemController : Controller
    
    {
        private readonly BooksItemStorage Libray;

        public BooksItemController(IConfiguration config)
        {
            Libray = new BooksItemStorage(config);
        }

        [HttpPost]
        public void AddBook(MyLibBooksItem bookItem)
        {
            Libray.addBookToLibrary(bookItem);
        }

        [HttpPost]
        public void AddToWishList(WishBooksItem wishbookItem)
        {
            Libray.addBookToWishList(wishbookItem);
        }
    }
}