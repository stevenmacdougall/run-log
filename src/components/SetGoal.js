import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";

import { Row, Col, Card, Button } from 'react-bootstrap';

export const SetGoal = () => {
    const history = useHistory();

    const [distance, setDistance] = useState('');
  
    const { addGoal } = useContext(GlobalContext);
  
    const onSubmit = e => {
      if (distance > 0) {
      e.preventDefault();
      let path = `/`; 
      history.push(path);} 
      else {
        alert ("Please enter a goal.")
      }
  
      const newGoal = {
        id: Math.floor(Math.random() * 100000000),
        distance: +distance
      }
      if (distance > 0) {
      addGoal (newGoal );}
    }
  
    return (
      <>
      <Row>
        <Col>  
        <Card>
          <Card.Header className="p-4">
          <h3 className="font-weight-bold title-text">Set Goal</h3>
          </Card.Header>
          <Card.Body className="p-4 bg-white">
          <form onSubmit={onSubmit}>  
            <div className="form-control border-0">
              <label className="mr-3 font-weight-bold" htmlFor="distance">Distance</label>
              <input className="sm-input" type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Ex. 30" /><span className="font-weight-bold text-secondary ml-2">Km</span>
            </div>
            <Button onClick={onSubmit} variant="btn btn-outline-purple mt-5 mt-sm-3">Save</Button>
          </form>
        </Card.Body>
        </Card>
        </Col>
      </Row>
      </>
    );
  }
  
