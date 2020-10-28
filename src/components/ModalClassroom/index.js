import React from 'react'

import {
    Container,
    Wrapper,
    Header,
    YesOrNo,
    ButtonYes,
    ButtonNo,
    ListGroup,
    Title,
    ListStudent,
    Card
} from './styles'

const ModalClassroom = () => {
    return (
        <Container>
            <Wrapper>
                <Header>
                    <p>18 de 42 alunos presentes</p>
                    <p>Você confirma que os alunos abaixo estão ausentes hoje?</p>
                    <YesOrNo>
                        <ButtonYes>Sim</ButtonYes>
                        <ButtonNo>Não</ButtonNo>
                    </YesOrNo>
                </Header>
                <ListGroup>
                    <Title>Alunos</Title>
                    <ListStudent>
                        <Card>
                            <h2>Camila Perez Sanchez</h2>
                        </Card>
                        <Card>
                            <h2>Camila Perez Sanchez</h2>
                        </Card>
                        <Card>
                            <h2>Camila Perez Sanchez</h2>
                        </Card>
                        <Card>
                            <h2>Camila Perez Sanchez</h2>
                        </Card>
                        <Card>
                            <h2>Camila Perez Sanchez</h2>
                        </Card>
                        <Card>
                            <h2>Camila Perez Sanchez</h2>
                        </Card>
                    </ListStudent>
                </ListGroup>
            </Wrapper>
        </Container>
    )
}

export default ModalClassroom