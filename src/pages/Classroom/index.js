import React, { useState } from 'react'
import ModalClassroom from '../../components/ModalClassroom'

import {
    Container,
    Header,
    InputGroup,
    SearchButton,
    IconSearch,
    ConfirmButton,
    IconRight,
    ListGroup,
    Title,
    ListStudent,
    Card
} from './styles'

const Classroom = () => {

    const [ isModalVisible, setIsModalVisible ] = useState(false)

    return (
        <Container>
            <Header>
                <InputGroup>
                    <label htmlFor="search">Buscar</label>
                    <input name="search"/>
                    <SearchButton><IconSearch /></SearchButton>
                </InputGroup>
                <ConfirmButton onClick={() => setIsModalVisible(true)}>
                    <h5>Confirmar</h5>
                    <IconRight />
                </ConfirmButton>
            </Header>
            <ListGroup>
                <Title>Alunos</Title>
                <ListStudent>
                    <Card>
                        <h2>Camila Perez Sanchez</h2>
                        <input name="absent" type="checkbox"/>
                    </Card>
                    <Card>
                        <h2>Camila Perez Sanchez</h2>
                        <input name="absent" type="checkbox"/>
                    </Card>
                    <Card>
                        <h2>Camila Perez Sanchez</h2>
                        <input name="absent" type="checkbox"/>
                    </Card>
                    <Card>
                        <h2>Camila Perez Sanchez</h2>
                        <input name="absent" type="checkbox"/>
                    </Card>
                    <Card>
                        <h2>Camila Perez Sanchez</h2>
                        <input name="absent" type="checkbox"/>
                    </Card>
                    <Card>
                        <h2>Camila Perez Sanchez</h2>
                        <input name="absent" type="checkbox"/>
                    </Card>
                    <Card>
                        <h2>Camila Perez Sanchez</h2>
                        <input name="absent" type="checkbox"/>
                    </Card>
                </ListStudent>
            </ListGroup>
            {isModalVisible && <ModalClassroom 

                                />
            }
        </Container>
    )
}

export default Classroom