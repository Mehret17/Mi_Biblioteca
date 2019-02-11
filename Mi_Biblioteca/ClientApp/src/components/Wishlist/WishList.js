import React from 'react';
import getBooks from '../../APICalls/BooksRequest';

class wishList extends React.Component {

    state = {
        wishListBooks: [],
        isBought: false
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

    handleSumbit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({ bought: e.target.value })
    }

    clicked = (e) => {
        this.setState({ isBought: !this.state.isBought })
    }

    render() {
        const myLibraryWishList = this.state.wishListBooks.map((book, index) => {
            return (
                <div key={index} className='well well-sm'>
                    <img src={book.imageLink} />
                    <h5>Title: {book.title}</h5>
                    <h5>Author: {book.authors}</h5>
                    <form onSubmit={this.handleSubmit}>
                        <p>Bought?</p>
                        <label>
                            <input
                                type="radio"
                                value={this.state.isBought}
                                onChecked={() => this.clicked}
                                onChange={this.handleChange}
                            />
                        </label>
                    </form>


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

