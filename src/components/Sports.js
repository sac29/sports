import React, { Component } from 'react';
import {
    Container,
    Card,
    ListGroup,
    InputGroup,
    FormControl,
    Navbar,
    Row,
    Col
} from 'react-bootstrap';


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
        const searchTerm = event.target.value.trim();
        let filteredSports;
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
                <Container fluid className="bg-light">
                    <Navbar bg="dark">
                        <Navbar.Brand className="text-light">
                            Sports
                        </Navbar.Brand>
                    </Navbar>
                    <Row className="justify-content-center p-3">
                        <Col xs={4}>
                            <InputGroup className="">
                                <FormControl
                                    placeholder="Search your favourite sport"
                                    aria-label="Username"
                                    onChange={this.onChange}
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
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
