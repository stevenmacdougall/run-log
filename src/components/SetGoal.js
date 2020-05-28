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
        <Col className="mb-2">
        <h2 className="font-weight-bold title-text d-inline mb-">Enter Goal</h2>
        </Col>
      </Row>
      <Row>
        <Col>  
        <Card className="p-3">
        <form onSubmit={onSubmit} className="bg-white">  
          <div className="form-control border-0">
            <label className="mr-3 font-weight-bold" htmlFor="distance">Goal</label>
            <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Enter time..." /><span className="font-weight-bold text-secondary ml-2">Km</span>
          </div>
          <Button onClick={onSubmit} variant="btn btn-outline-purple mt-3">Save</Button>
        </form>
        </Card>
        </Col>
      </Row>
      </>
    );
  }
  
