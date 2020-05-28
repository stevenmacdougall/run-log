import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";


import { Row, Col, Card, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning} from '@fortawesome/free-solid-svg-icons';

export const AddRun = () => {

    const history = useHistory();
  
    const [text, setText] = useState('');
    const [distance, setDistance] = useState('');
  
    const { addRun } = useContext(GlobalContext);
  
    const onSubmit = e => {
      if (distance > 0 & text !== "") {
      e.preventDefault();
      let path = `/`; 
      history.push(path);} 
      else {
        alert ("Please enter a run description and distance.")
      }
      
      const newRun = {
        id: Math.floor(Math.random() * 100000000),
        text,
        distance: +distance
      }
      if (distance > 0 & text !== "") {
      addRun(newRun);}
      }
  
    return (
      <>
      <Row>
        <Col>
        <Card>
        <Card.Header className="p-4">
        <h3 className="font-weight-bold title-text"><FontAwesomeIcon className="fa-2x text-dark d-inline mr-1" icon={faRunning} /> Run Details</h3>
        </Card.Header>
        <Card.Body className="p-4">
          <form onSubmit={onSubmit} className="bg-white">  
          <div className="form-control border-0">
            <label htmlFor="text" className="mr-2">Description</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ex. Evening Run June 8th" />
          </div>
          <div className="form-control border-0">
            <label htmlFor="distance" className="mr-2">Distance</label>
            <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Ex. 5" /> <span>Km</span>
          </div>
          </form>
        </Card.Body> 
        <Card.Footer className="p-4">
          <Button onClick={onSubmit} variant="btn btn-outline-purple" className="mt-3">Add Run</Button>
        </Card.Footer>
        </Card>
        </Col>
      </Row>
      </>
    );
  }
  
