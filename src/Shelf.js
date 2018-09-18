import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
	
	whichShelf(props) {
		return (
			this.props.shelfID === 'current' ? this.innerHTML = "Currently Reading" :
			this.props.shelfID === 'want' ? this.innerHTML = "Want To Read" :
			this.innerHTML = "Read"
		)
	}

	render() {
		
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">
					{this.whichShelf()}
        </h2>
        
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.shelfArray.map((book) => (
								<li key={book.id}>
                    <Book
                      book={book}
                      moveShelf={this.props.moveShelf}
                      currentShelf={book.shelf}
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