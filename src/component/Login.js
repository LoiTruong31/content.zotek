import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);

    const onSubmit = async (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        console.log(email, password);
        
        try {
            const response = await axios.post("", {
              email : email,
              password : password,
            }).then((response )=> {
              console.log(response);
              if (response.data.login === true) {
                const data = response.data;
        
                // Lưu token vào local storage
                localStorage.setItem("token", data.access_token);
      
                console.log(localStorage.getItem("token"));
                // Chuyển hướng đến trang chủ
                window.location.href = "/";
              } else {
                alert(response.data.message);
              }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Container fluid>
            <Row className='100-w'>
                <Col className='p-0' md={4}>
                    <Container className='align-items-center vh-100 d-flex justify-content-center'>
                        <h1>Welcome!</h1>
                    </Container>
                </Col>
                <Col className='p-0' md={8}>
                    <Container className='justify-content-center align-items-center vh-100 d-flex bg-info' fluid>
                        <Container className='bg-white border col-5'>
                            <Form noValidate validated={validated} onSubmit={onSubmit} className='mt-4'>
                                <Form.Group className='d-flex justify-content-center'>
                                    <Image src='https://zotek8.com/wp-content/uploads/2023/07/Zotek8_logo_no-slogan_1-1024x1024.png' className='w-50 h-50'/>
                                </Form.Group>
                                <Form.Group className='mb-4' controlId='formGroupEmail'>
                                    <Form.Label className=''>Email:</Form.Label>
                                    <Form.Control required type='email' placeholder='Enter your email' 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        Email không hợp lệ.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='mb-4' controlId='formGroupPassword'>
                                    <Form.Label className=''>Password:</Form.Label>
                                    <Form.Control required type='password' placeholder='Enter your password' 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <Form.Control.Feedback type='invalid'>
                                        Nhập password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Row>
                                        <Col md={5}>
                                            <Form.Check type='checkbox' label='Remember me'/>
                                        </Col>
                                        <Col md={7}>
                                            <Form.Label>Chưa có tài khoản <a href='#'>Sign Up</a></Form.Label>
                                        </Col>
                                        
                                    </Row>
                                </Form.Group>
                                <div className='d-grid mb-3'>
                                <Button type='submit' variant='success'>Login</Button>
                                </div>
                            </Form>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Login;
