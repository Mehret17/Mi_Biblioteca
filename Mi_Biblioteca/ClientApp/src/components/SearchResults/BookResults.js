import React from 'react';

class BookResults extends React.Component {
    render() {
        const {booksDetails} = this.props
        return (
            <div className="text-center">
                <h4>{booksDetails.volumeInfo.title}</h4>
            </div>
            )
    }
}

export default BookResults;
