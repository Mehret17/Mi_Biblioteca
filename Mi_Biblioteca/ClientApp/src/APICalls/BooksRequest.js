import axios from 'axios';

const getBooks = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://www.goodreads.com/search.xml?key=AjJN7b1F1SFJRROEpMk2Gw&output=json`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default getBooks;