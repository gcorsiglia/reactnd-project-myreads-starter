import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {

	render() {
		
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">
					{
						if (this.props.id === 'current') {
							this.innerText = 'Currently Reading'
						}
					}
        </h2>
        
        <div className="bookshelf-books">
          <ol className="books-grid">
              
          </ol>
        </div>
      </div>
		);
	}
}

export default Shelf;