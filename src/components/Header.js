import React from 'react';

import { Row, Col } from 'react-bootstrap';

export const Header = () => {
  return (
    <Row className="mb-4 border-bottom bg-purple pt-5">
      <Col className="mt-3 mb-3">
        <h2 className="font-weight-bold title-text d-inline text-white">
          Run Log
        </h2>
      </Col>
    </Row>
  )
}