import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
	
	render() {

		const { books, moveShelf, currentShelf } = this.props;

    const shelfNames = {
      "currentlyReading": "Currently Reading",
      "wantToRead": "Want To Read",
      "read": "Read"
    }
		
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">
					{shelfNames[currentShelf]}
        </h2>
        
        <div className="bookshelf-books">
          <ol className="books-grid">
              {books
              	.filter((book) => 
        					book.shelf === currentShelf
        				)
              	.map((book) => (
								<li key={book.id}>
                    <Book
                      book={book}
                      moveShelf={moveShelf}
                      currentShelf={currentShelf}
                    />
                </li>
              ))}
          </ol>
        </div>
      </div>
		);
	}
}

export default Shelf;