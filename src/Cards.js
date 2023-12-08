import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Cards() {
    const cardData = [
        { title: "Card1", text: "These" , color: "red", textColor: "white"},
        { title: "Card2", text: "Are" , color: "green" , textColor: "white"},
        { title: "Card3", text: "Cards", color: "blue" , textColor: "white"},
    ];

    return (
        <Row xs={1} md={3} className="g-5 me-5 ms-5">
        {cardData.map((card, idx) => ( 
            <Col key={idx}>
                <Card style={{backgroundColor: card.color}}> 
                    
                    <Card.Body>
                        <Card.Title style={{ color: card.textColor }} >{card.title}</Card.Title>
                        <Card.Text  style={{ color: card.textColor }} >{card.text}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
    );
}

export default Cards;

