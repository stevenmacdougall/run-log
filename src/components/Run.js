import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Button, ListGroup, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const Run = ({ run }) => {
  const { deleteRun } = useContext(GlobalContext);

  return (
    <ListGroup.Item className="rounded-0 border-top-0 border-right-0 border-left-0">
      <Row>
      <Col xs={1} className="text-left">
      <FontAwesomeIcon className="fa-lg plus" icon={faCheckCircle}/>
      </Col>
      <Col xs={5} className="text-left">
      {run.text}
      </Col>
      <Col xs={4} className="text-left">
      <span className="text-secondary font-weight-bold">Distance: {Math.abs(run.distance)}Km</span>
      </Col>
      <Col xs={1} className="text-right">
      <Button className="bg-transparent border-0 p-0" onClick={() => deleteRun(run.id)}>
      <FontAwesomeIcon className="fa-lg minus text-right" icon={faTimesCircle}/></Button>
      </Col>
      </Row>
    </ListGroup.Item>
  )
}