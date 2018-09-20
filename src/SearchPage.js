import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book';
import sortBy from 'sort-by';

class SearchPage extends Component {
	
	constructor(props) {
    super(props)
    this.state = {
      query: '',
      searchResults: []
    }
  }

  updateQuery(query) {
  	this.setState({ query: query.trim() });
  	this.updateSearchResults(query);
  }

  updateSearchResults(query) {
  	if(query) {
  		BooksAPI.search(query)
  		.then(searchResults => {
				searchResults.error
					? this.setState({ searchResults: [] }) 
					: this.setState({ searchResults });
				}
  		);
		} else {
			this.setState({ searchResults: [] })
		}
  }

  clearQuery() {
  	this.updateQuery('')
  }

	render() {
		
		const { books } = this.props;
		const { query, searchResults } = this.state;

		searchResults.sort(sortBy('title'));

		return (
			<div className="search-books">
	      <div className="search-books-bar">
	        <Link 
	        	className="close-search" 
	          to="/"
	        >Close</Link>
	              	
	        <div className="search-books-input-wrapper">     	
	          <input 
	          	type="text" 
	          	placeholder="Search by title or author"
	          	value={query}
	          	onChange={(event) => this.updateQuery(event.target.value)}
	          />
	        </div>


	      </div>
	            
	      <div className="search-books-results">
	        <ol className="books-grid">
						{searchResults.map((book) => (
							<li key={book.id}>
								<Book
									book={book}
								/>
							</li>
						))}
	        </ol>
	      </div>
      </div>
		);
	}
}

export default SearchPage;