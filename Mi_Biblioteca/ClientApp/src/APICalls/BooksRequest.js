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

export default getBooks;