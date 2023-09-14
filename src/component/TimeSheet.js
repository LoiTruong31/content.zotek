import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TimeSheet = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={2} className='bg-info'>
                        hello
                    </Col>
                    <Col className='bg-warning'>
                        hello2
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TimeSheet;
