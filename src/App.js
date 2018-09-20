import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';


class BooksApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  
  componentDidMount() {
    this.getAllBooks();
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    
    this.getAllBooks();
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage 
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )}/>

        <Route path="/search" render={() => (
          <SearchPage 
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )}/>
      </div>
    );
  }
}

export default BooksApp
