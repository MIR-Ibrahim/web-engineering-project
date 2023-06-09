import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="m-2" onClick={handleShow}>
        <span className=" fa fa-user-plus me-2 "></span>Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Button variant="secondary" type="submit" className="w-100 mb-4">
            <span className=" fa fa-google me-2 "></span>
            Signup with Google
          </Button>
          <Button variant="secondary" type="submit" className="w-100 mb-4">
            <span className=" fa fa-facebook me-2 "></span>
            Signup with Facebook
          </Button> */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="outline-secondary" type="submit" className="w-100">
              Signup
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signup;
