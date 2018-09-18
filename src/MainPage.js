import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf'

class MainPage extends Component {
	
	render() {
		console.log(this.props.books)

		const { books } = this.props;

		return(
			<div className="list-books">
        <div className="list-books-title">
        	<h1>MyReads</h1>
      	</div>
            
      	<div className="list-books-content">
        	<div>
        		<Shelf
        			id="current"
        			shelfArray={
        				books.filter((book) => 
        					book.shelf === 'currentlyReading'
        				)
        			}
        		/>
        		
        		<Shelf 
        			id="want"
							shelfArray={
        				books.filter((book) => 
        					book.shelf === 'wantToRead'
        				)
        			}
        		/>
        		
        		<Shelf 
        			id="read"
							shelfArray={
        				books.filter((book) => 
        					book.shelf === 'read'
        				)
        			}
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