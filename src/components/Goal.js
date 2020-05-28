import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

import { Row, Col, Card } from 'react-bootstrap';

export const Goal = () => {
  const { runs } = useContext(GlobalContext);

  const { goals } = useContext(GlobalContext);

  const { clearGoal } = useContext(GlobalContext);

  const distances = runs.map(run => run.distance);

  const goalTime = goals.map(goal => goal.distance);

  const myGoal = goalTime
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)

    const income = distances
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)

    const remaining = myGoal - income;

  return (
    <Row className="mb-3">
        <Col>
          <Card body className="shadow border-0">
            <h4 className="sm-title-text text-secondary mb-0">Goal</h4>
            <p className="font-weight-bold mb-0 lg-text">{myGoal}Km</p>
            <Link to="set-goal" className="btn btn-outline-purple"  onClick={() => clearGoal(goals)}>{myGoal > 0 ? 'Reset Goal' : 'Set Goal'}</Link>
            <p className="text-success">{myGoal > 0 & remaining < 1 ? 'Congrtats! You reached your goal': '' }</p>
          </Card>
        </Col>
      </Row>
  )
}
