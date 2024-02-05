import Button from "react-bootstrap/Button";
import {Container, Row, Col, Alert} from "react-bootstrap";

function Bootstrap(){
    return(
        <div>
            <Button>Click Here</Button>
            <br /> <br />

            <Container fluid>
                <Row>
                    <Col style={{backgroundColor:"green"}}>Col 1</Col>
                    <Col style={{backgroundColor:"red"}}>Col 2</Col>
                    <Col style={{backgroundColor:"Yellow"}} >Col 3</Col>
                </Row>
            </Container>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
        <div>
            <Alert key='success' variant="success">
            This is a success alert—check it out!
            </Alert>
        </div>
        </div>
    );
}

export default Bootstrap;