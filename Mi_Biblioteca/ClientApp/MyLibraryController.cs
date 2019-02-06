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
    public class MyLibraryController : Controller
    
    {
        private readonly MyLibraryStorage Libray;

        public MyLibraryController(IConfiguration config)
        {
            Libray = new MyLibraryStorage(config);
        }

        [HttpPost]
        public void AddBook(BooksItem bookItem)
        {
            Libray.addBookToLibrary(bookItem);
        }
    }
}