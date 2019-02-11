using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Mi_Biblioteca.Models;
using Microsoft.Extensions.Configuration;

namespace Mi_Biblioteca.DataAccess
{
    public class BooksItemStorage
    {
        // private IConfiguration config;

        private readonly string ConnectionString;

        public BooksItemStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public void addBookToLibrary(MyLibBooksItem bookitem)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"INSERT INTO BooksItem(title, authors, description, categories, ImageLink, userId)
                                     values (@title, @authors, @description, @categories, @ImageLink, @userId)", bookitem);

            }
        }

        public void addBookToWishList(WishBooksItem wishbookitem)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"INSERT INTO BooksItem(title, authors, description, categories, ImageLink, wantToRead)
                                     values (@title, @authors, @description, @categories, @ImageLink,  @wantToRead)", wishbookitem);

            }
        }

        public List<MyLibBooksItem> GetMyLibraryBooks()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<MyLibBooksItem>(@"select title, authors, categories, description, ImageLink from BooksItem
                                                                where userId = 1");
                return result.ToList();


            }
        }

        public List<WishBooksItem> GetMyWishList()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<WishBooksItem>(@"select title, authors, categories, description, ImageLink from BooksItem
                                                                where wantToread = 1");
                return result.ToList();

            }
        }
    }

}
