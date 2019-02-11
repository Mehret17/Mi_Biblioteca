import React from 'react';
import booksRequest from '../../APICalls/BooksRequest';
//import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import SearchResults from '../SearchResults/SearchResults';
import "./Home.css";


//const defaultBook = {
//    Id: '',
//    Title: '',
//    Author: '',
//    Description: '',
//    Category: '',
//    MyLibraryId: '',
//    WishListId: '',
//    ImageLink: '',
//}

class Home extends React.Component {
    state = {
        books: [],
        myLibrary: [],
        wishListLibrary: [],
        searchResult: '',
        isCliked: false,
    }

    /* searching Books */
    searchBooks = (e) => {
        if (e.key === 'Enter') {
            booksRequest
                .getBooks(this.state.searchResult)
                .then(results => {
                    this.setState({ books: results.items })
                })
                .catch(err => {
                    console.error('error in searching books', err)
                })
        }
    }

    searchInput = (e) => {
        this.setState({ searchResult: e.target.value });
    }

    /* adding Books */

    saveBook = books => {
        const myBooks = { ...this.state.myLibrary };
        myBooks.title = books.volumeInfo.title;
        {
            books.volumeInfo.authors.length > 1 ?
                myBooks.authors = books.volumeInfo.authors.join(" & ") :
                myBooks.authors = books.volumeInfo.authors[0]
        }
        // myBooks.authors = books.volumeInfo.authors
        myBooks.description = books.volumeInfo.description;
        {
            books.volumeInfo.categories.length > 1 ?
                myBooks.categories = books.volumeInfo.categories.join(" & ") :
                myBooks.categories = books.volumeInfo.categories[0];
        }
        //  myBooks.categories = books.volumeInfo.categories;
        myBooks.userId = 1;
        //myBooks.WishListId = 1;
        myBooks.ImageLink = books.volumeInfo.imageLinks.thumbnail;
            
        booksRequest
            .addBook(myBooks)
            .then(() => {
                this.props.history.push("/MyLibrary");
            })
            .catch(err => {
                console.error("error in posting my Books", err)
            });
    }

      /* adding Books to wishlist */

    saveWishListBook = books => {
        const wishList = { ...this.state.wishListLibrary };
        wishList.title = books.volumeInfo.title;
        {
            books.volumeInfo.authors.length > 1 ?
                wishList.authors = books.volumeInfo.authors.join(" & ") :
                wishList.authors = books.volumeInfo.authors[0]
        }
        // myBooks.authors = books.volumeInfo.authors
        wishList.description = books.volumeInfo.description;
        {
            books.volumeInfo.categories.length > 1 ?
                wishList.categories = books.volumeInfo.categories.join(" & ") :
                wishList.categories = books.volumeInfo.categories[0];
        }
        //  myBooks.categories = books.volumeInfo.categories;

        wishList.wantToRead = 1;
        wishList.ImageLink = books.volumeInfo.imageLinks.thumbnail;
        booksRequest
            .addWishList(wishList)
            .then(() => {
                this.props.history.push("/wishList");
            })
            .catch(err => {
                console.error("error in posting my want to read books", err)
            });
    }






    render() {
        if (this.state.books) {
            this.booksComponent = this.state.books.map(book => {
                return (
                    <SearchResults
                        key={book.id}
                        booksDetails={book}
                        saveBook={this.saveBook}
                        saveWishListBook={this.saveWishListBook}
                    />
                )
            })
        }
        return (
            <div className="Home">
                <h2>Explore</h2>
                <input
                    type="text"
                    placeholder="Search for a book"
                    onChange={this.searchInput}
                    onKeyPress={this.searchBooks}
                />
                {this.booksComponent}
            </div>

        )
    }
}

export default Home;