import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function NumberCard({ number, setChoice, round, setRound}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(e);
        // console.log("choice: ", e.target.value.trim())
        setChoice(number);
        const nextRound = round + 1
        setRound(nextRound);
        setShow(false);
        
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                {number}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choise</Modal.Title>
                </Modal.Header>
                <Modal.Body>You picked {number}. // DEV NOTE: create a form inside this model that submits the user number.</Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Choice</Form.Label>
                        <Form.Control type="text" name="choice" placeholder={number} value={number} readOnly />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit Choice
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}


export default NumberCard;