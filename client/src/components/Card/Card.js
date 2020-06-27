import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";

const Card = (props) => {
  return props.books.length === 0 ? (
    <div />
  ) : (
    <div>
      {props.books.map((book) => {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <a className="title" href={book.link}>
                  <h5 className="book-title">{book.title}</h5>
                </a>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <a className="link" href={book.link}>
                  {book.link}
                </a>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col size="sm-1" className="pr-0">
                <img className="bookimg" src={book.image} alt="" />
              </Col>
              <Col size="md-7">
                <h6 className="author">
                  {book.author} - {book.date}
                </h6>
                <p className="description">{book.description}</p>
              </Col>
              <Col size="md-1">
                <button
                  className="btn button"
                  id={book.id}
                  onClick={(event) => props.handleSavedButton(event)}
                >
                  Save
                </button>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};
export default Card;
