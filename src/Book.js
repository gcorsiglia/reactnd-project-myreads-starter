import React, { Component } from 'react';

class Book extends Component {
	
	render() {

    const { book, moveShelf, currentShelf } = this.props;

    let bookCover = book.imageLinks 
                    ? book.imageLinks.smallThumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover';

    let bookAuthors = book.authors
                      ? book.authors.join(', ' : '') : null;
		
    return (
  		<div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ 
            width: 128, 
            height: 193, 
            backgroundImage: `url("${bookCover}")`
          }}></div>
                      
          <div className="book-shelf-changer">
            <select
              onChange={(event) =>
                moveShelf(book, event.target.value)
              }
              value={currentShelf}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
                      
        <div className="book-title">
          {book.title}
        </div>
                  
        <div className="book-authors">
          {bookAuthors}
        </div>
      </div>
		);
	}
}

export default Book;