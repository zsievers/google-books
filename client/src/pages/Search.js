import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card/Card";

import "./style.css";

class Search extends Component {
  state = {
    query: "",
    books: [],
    message: "",
    error: " "
  };

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("[QUERY IS]", this.state.query);
    API.getSearchedBooks(this.state.query)
      .then(res => {
        console.log("Response data", res.data.items);
        const books = res.data.items.map(item => {
          const book = {
            key: item.id,
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            // description: item.searchInfo.textSnippet,
            date: item.volumeInfo.publishedDate,
            description: item.volumeInfo.description,
            image: !!item.volumeInfo.imageLinks
              ? item.volumeInfo.imageLinks.thumbnail
              : "https://place-hold.it/53x80",
            link: item.volumeInfo.infoLink
          };
          return book;
        });
        this.setState({ books: books, error: "", query: "" });
      })
      .catch(err => {
        this.setState({ error: err.items });
      });
  };

  handleSavedButton = event => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(
      book => book.id === event.target.id
    );
    API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.query}
        />

        <Card
          books={this.state.books}
          handleSavedButton={this.handleSavedButton}
        />
      </div>
    );
  }
}
export default Search;