import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";

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
        </div>
    );
}

export default Bootstrap;