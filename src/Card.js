import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

function Cardcomp(props) {
  const { title, description, imageUrl, newsUrl, date } = props;

  return (
    <div className="newscard">
        <Card>
        <div className="CardImage">
          <Card.Img variant="top" src={imageUrl} />
          </div>
          <Card.Body>
            {/* <Card.Title>{title}</Card.Title> */}
            <Card.Text>{description}</Card.Text>
            <div className="CardButton">
              <Card.Footer className="CardFooter">
                ON {new Date(date).toGMTString()}
              </Card.Footer>
              <a href={newsUrl}>
                <Button variant="primary">Read More</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Cardcomp;
