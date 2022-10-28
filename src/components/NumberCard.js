import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function NumberCard({ number }) {
    const [choice, setChoice] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.value.trim())

        // console.log("before", choice)
        // setChoice({...choice, e.target.value.trim()})
        // console.log("after", choice)
        setShow(false);
    }

    return (
        <>
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
                        <Form.Control type="text" placeholder={number} value={number} readOnly />
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
        </>
    );
}



// function NumberCard({ number }) {
//   return (
//     <Card style={{ width: '18rem', height: '18rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <Card.Body>
//       <Card.
//         <Card.Title>{ number }</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Pick Me</Button>
//       </Card.Body>
//     </Card>
//   );
// }


export default NumberCard;