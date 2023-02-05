import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
function Cardcomp(props) {
  
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="newscard">
      <Card className=" reveal fade-left" style={{height:"inherit",paddingBottom:"10px"}}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {<b>{source}</b>}<br></br>
            {description}
          </Card.Text>
          <div className="CardButton" >
            <Card.Footer style={{ backgroundColor: '#d9d9d9' }}>By {author} <br/> ON {new Date(date).toGMTString()}</Card.Footer><br/>
            <a href={newsUrl}><Button variant="primary">Read More</Button></a>
          </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardcomp;
