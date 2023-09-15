import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TimeSheet = () => {
    return (
        <>
            <Container className='mt-5 d-grid'>
                <Row className='grid'>
                    <Col xs={2} className='bg-default d-flex'>
                        <Container>
                            <Row className='mb-2'>
                                <div class="container-fluid dropdown border border-2 m-0 p-0">
                                    <button class="btn btn-dark btn-xs m-0 text-start w-100 rounded-0 h-auto" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-controls="collapseExample" aria-expanded="false">
                                        Timesheet
                                    </button>
                                    <div class="collapse m-0" id="collapseExample1">
                                        <ul class="nav flex-sm-column justify-content-start align-items-start">
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">My Timesheet</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">My Request</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">My Leave</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Member setting</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Timesheet report</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Holiday</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                            <Row className='mb-2'>
                                <div class="container-fluid dropdown border border-2 m-0 p-0">
                                    <button class="btn btn-dark btn-xs m-0 text-start w-100 rounded-0 h-auto" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-controls="collapseExample" aria-expanded="false">
                                        Manager
                                    </button>
                                    <div class="collapse m-0" id="collapseExample2">
                                        <ul class="nav flex-sm-column justify-content-start align-items-start">
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Confim request</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Reminder member</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Member leave</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Assign</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Member timesheet</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Member setting</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div class="container-fluid dropdown border border-2 m-0 p-0">
                                    <button class="btn btn-dark btn-xs m-0 text-start w-100 rounded-0 h-auto" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-controls="collapseExample" aria-expanded="false">
                                        Help
                                    </button>
                                    <div class="collapse m-0" id="collapseExample3">
                                        <ul class="nav flex-sm-column justify-content-start align-items-start">
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Help</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Feedback</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Calendar</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-black" href="/">Helpdesk</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={10} className='bg-warning'>
                        <Container className='p-0'>
                            <Row className='bg-white'>
                                <Container fluid className='bg-dark text-white h-auto'>
                                    <p className='text-start m-2'>My timesheet</p>                               
                                </Container>
                                <Container className='bg-white'>
                                    <p>setting timesheet</p>
                                </Container>
                            </Row>
                            <Row>
                                hello
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TimeSheet;
