import React from 'react';
import getBooks from '../../APICalls/BooksRequest';

class wishList extends React.Component {

    state = {
        wishListBooks: []
    }

    componentDidMount = () => {
        getBooks
            .getWishList()
            .then((result) => {
                this.setState({ wishListBooks: result })
            })
            .catch((err) => {
                console.error("error in getting my wishList", err)
            })
    }

    render() {
        const myLibraryWishList = this.state.wishListBooks.map(book => {
            return (
                <div key={book.id} className='well well-sm'>
                    <img src={book.imageLink} />
                    <h5>Title: {book.title}</h5>
                    <h5>Author: {book.authors}</h5>


                </div>
            );
        }).reverse();

        return (
            <div>
                {myLibraryWishList}
            </div>
        )
    }
}

export default wishList;

