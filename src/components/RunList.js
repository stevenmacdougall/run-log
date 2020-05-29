import React, { useContext } from 'react';
import { Run } from './Run';

import { GlobalContext } from '../context/GlobalState';

import { Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

export const RunList = () => {
  const { runs } = useContext(GlobalContext);
  const { deleteRuns } = useContext(GlobalContext);


  return (
    <>
    <Row>
      <Col className="mb-2 mt-2">
      <h3 className="font-weight-bold title-text d-inline">Runs</h3>
      </Col>
    </Row>
    <Row>
      <Col>
      <Card className="shadow">
        <Card.Body id="run-log" className="p-0">
        <ListGroup className="text-center">
        {runs < 1 ? <p className="mt-3">No Runs Logged.</p> : runs.map(run => (<Run key={run.id} run={run} />))}
        </ListGroup>
       </Card.Body>
       <Card.Footer className="p-4">
         <Button className="text-secondary btn-light" onClick={() => deleteRuns(runs)}>Clear All</Button>
       </Card.Footer>
      </Card>
      </Col>
    </Row>
    </>
  )
}