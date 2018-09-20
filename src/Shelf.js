import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
	
	whichShelf(props) {
		return (
			this.props.currentShelf === 'currentlyReading' ? this.innerHTML = "Currently Reading"
			: this.props.currentShelf === 'wantToRead' ? this.innerHTML = "Want To Read"
			: this.innerHTML = "Read"
		)
	}

	render() {

		const { moveShelf, books, currentShelf } = this.props;
		
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">
					{this.whichShelf()}
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