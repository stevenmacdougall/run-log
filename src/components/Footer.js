import React from 'react'
import { Link } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <Row className="footer pt-3 bg-white fixed-bottom border-top">
      <Col>
        <Link to="/add-run" className="position-fixed" id="menu-add-run-button">
          <FontAwesomeIcon className="fa-4x text-dark bg-white rounded-circle" icon={faPlusCircle} />
        </Link>
      </Col>
    </Row>
  )
}