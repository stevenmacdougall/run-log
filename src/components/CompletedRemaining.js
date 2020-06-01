import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Row, Col, Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faRunning } from '@fortawesome/free-solid-svg-icons';

export const CompletedRemaining = () => {
  const { runs } = useContext(GlobalContext);
  const { goals } = useContext(GlobalContext);

  const distances = runs.map(run => run.distance);
  const goalTime = goals.map(goal => goal.distance);

  const income = distances
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    
    const myGoal = goalTime
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)

    const remaining = myGoal - income;

  return (
    
    <Row className="mb-3">
        <Col>
          <Card body className="shadow">
            <FontAwesomeIcon className="fa-2x mb-2 plus" icon={faCheckCircle} />
            <h4 className="text-secondary sm-title-text mb-0">Completed</h4>
            <p className="title-text font-weight-bold mb-0">{income}Km</p>
          </Card>
        </Col>
        <Col>
          <Card body className="shadow">
            <FontAwesomeIcon className="fa-2x mb-2 minus" icon={faRunning} />
            <h4 className="text-secondary sm-title-text mb-0">Remaining</h4>
            {myGoal > 0 & remaining < 1 ? alert ('You have reached your goal!') : null}
            <p className="title-text font-weight-bold mb-0">{remaining}Km</p>
          </Card>
        </Col>
      </Row>
  )
}
