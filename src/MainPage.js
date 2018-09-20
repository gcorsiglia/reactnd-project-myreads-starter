import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class MainPage extends Component {
	
	render() {
		
		const { books, moveShelf } = this.props;

		return(
			<div className="list-books">
        <div className="list-books-title">
        	<h1>MyReads</h1>
      	</div>
            
      	<div className="list-books-content">
        	<div>
        		<Shelf
        			currentShelf="currentlyReading"
        			books={books}
        			moveShelf={moveShelf}
        		/>
        		
        		<Shelf 
        			currentShelf="wantToRead"
							books={books}
        			moveShelf={moveShelf}
        		/>
        		
        		<Shelf 
        			currentShelf="read"
							books={books}
        			moveShelf={moveShelf}
        		/>
        	</div>
      	</div>
            
      	<div className="open-search">
        	<Link 
        		to="/Search">
        			Add a book
        	</Link>
      	</div>
    	</div>
		);
	}
}

export default MainPage;