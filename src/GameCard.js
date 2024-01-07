import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./App.css";
const GameCard = ({title, description}) => {
  //console.log("title and description of the game: ", title, description);
  return (
    <Card className="gameCard" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GameCard;