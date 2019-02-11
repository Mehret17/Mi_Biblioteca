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

        [HttpPost("wishBookItem")]
        public void AddToWishList(WishBooksItem wishbookItem)

        {
           
            Libray.addBookToWishList(wishbookItem);
        }

        [HttpGet]
        public IActionResult GetMyLibrary()
        {
           return Ok (Libray.GetMyLibraryBooks());
        }

        [HttpGet("wishList")]
        public IActionResult GetWishList()
        {
            return Ok(Libray.GetMyWishList());
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleBookFromLibrary(int id)
        {
            return Ok(Libray.GetSingleBook(id));
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteLibrary(int id)
        {
            var myBooks = Libray.GetSingleBook(id);

            if (myBooks == null)
            {
                return NotFound();
            }
            var success = Libray.DeleteMyLibrary(id);

            if (success)
            {
                return Ok();
            }
            return BadRequest(new { Message = "Delete was a Complete Failure" });
        }
    }
}