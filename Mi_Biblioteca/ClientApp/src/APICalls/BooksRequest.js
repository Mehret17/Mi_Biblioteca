import axios from 'axios';
import constants from '../Constants';

const getBooks = (txt) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${txt}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const addBook = (myLibrary) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`api/booksItem`, myLibrary)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(console.error('Error in addingBook request', err))
            })
    });
};

const addWishList = (wishList) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`api/booksItem/wishBookItem`, wishList)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(console.error('Error in adding wishList request', err))
            })
    });
};

export default { getBooks, addBook, addWishList };