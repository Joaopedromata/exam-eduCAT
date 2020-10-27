import React from 'react'

import {
    Container,
    InputGroup,
    SearchButton,
    IconSearch,
    ListGroup,
    Title,
    ListStudent,
    Card
} from './styles'

const Classroom = () => {
    return (
        <Container>
            <InputGroup>
                <label htmlFor="search">Buscar</label>
                <input name="search"/>
                <SearchButton><IconSearch /></SearchButton>
            </InputGroup>
            <ListGroup>
                <Title></Title>
                <ListStudent>
                    <Card>
                       <h2>Camila Perez Sanchez</h2>
                       <input name="absent" type="checkbox"/>
                    </Card>
                </ListStudent>
            </ListGroup>
        </Container>
    )
}

export default Classroom