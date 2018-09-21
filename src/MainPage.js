import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

function MainPage(props) {
	
	return (
		
		<div className="list-books">
      <div className="list-books-title">
       	<h1>MyReads</h1>
      </div>
            
      <div className="list-books-content">
        <div>
        	<Shelf
        		currentShelf="currentlyReading"
        		books={props.books}
        		moveShelf={props.moveShelf}
        	/>
        		
        	<Shelf 
        		currentShelf="wantToRead"
						books={props.books}
        		moveShelf={props.moveShelf}
        	/>
        		
        	<Shelf 
        		currentShelf="read"
						books={props.books}
        		moveShelf={props.moveShelf}
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
  )
}

export default MainPage;