import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
	
	


	render() {
		
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">
					
        </h2>
        
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.shelfArray.map((book) =>
								<Book 
									bookDetails={this.props.book}
								/>
              )}
          </ol>
        </div>
      </div>
		);
	}
}

export default Shelf;