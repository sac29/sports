import React, { Component } from 'react';
import { Container, Card, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Sports.module.css';


export class Sports extends Component {
    state = {
        sports: [
            { id: 1, name: 'cricket' },
            { id: 2, name: 'football' },
            { id: 3, name: 'golf' },
            { id: 4, name: 'table-tennis' },
            { id: 5, name: 'badminton' },
            { id: 6, name: 'pool' },
            { id: 7, name: 'baseball' },
            { id: 8, name: 'basketball' },
            { id: 9, name: 'kayaking' },
            { id: 10, name: 'rafting' },
            { id: 11, name: 'surfing' },
            { id: 12, name: 'artistic gymnastics' }
        ],
        filteredData: []
    }

    componentDidMount() {
        const filteredData = this.state.sports.map(sp => ({ ...sp }));
        this.setState({ filteredData: filteredData });
    }


onChange = (event) => {
    debugger
    const searchTerm = event.target.value.trim();
    let filteredSports
    if (searchTerm) {
        filteredSports = this.state.sports.filter(sport => sport.name.includes(searchTerm));
    } else {
        filteredSports = [...this.state.sports]
    }
    this.setState({ filteredData: filteredSports });
}
render() {
    return (
        <div>
            <Container fluid >
                <Navbar bg="dark">
                    <Navbar.Brand href="#home">
                        <img
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Navbar>
                <Row className="justify-content-center">
                    <Col xs={8}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search your favourite sport"
                                aria-label="Username"
                                onChange={this.onChange}
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pt-10 justify-content-center">
                    <Col xs={8}>
                        <Card body>
                            <ListGroup>
                                {this.state.filteredData.map(sport =>

                                    <ListGroup.Item key={sport.id}>{sport.name}</ListGroup.Item>

                                )}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}

export default Sports
