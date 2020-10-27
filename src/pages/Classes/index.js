import React from 'react'
import illustration from '../../assets/illustration.svg'

import {
    Container,
    LeftSide,
    Title,
    ListSubject,
    Subjects,
    RightSide,
    WelcomeImage,

} from './styles'

const Classes = () => {
    return (
        <Container>
            <LeftSide>
                <Title><h3>Escolha sua próxima aula.</h3></Title>
                <ListSubject>
                    <Subjects>
                        <div className="sidebar"/>
                        <div className="wrapper">
                            <h3>Cálculo I</h3>
                            <span>25 alunos matriculados</span>
                        </div>
                    </Subjects>
                    <Subjects>
                        <div className="sidebar"/>
                        <div className="wrapper">
                            <h3>Cálculo II</h3>
                            <span>25 alunos matriculados</span>
                        </div>
                    </Subjects>
                    <Subjects>
                        <div className="sidebar"/>
                        <div className="wrapper">
                            <h3>Trigonometria</h3>
                            <span>25 alunos matriculados</span>
                        </div>
                    </Subjects>
                    <Subjects>
                        <div className="sidebar"/>
                        <div className="wrapper">
                            <h3>Estatística</h3>
                            <span>25 alunos matriculados</span>
                        </div>
                    </Subjects>
                    <Subjects>
                        <div className="sidebar"/>
                        <div className="wrapper">
                            <h3>Matemática</h3>
                            <span>25 alunos matriculados</span>
                        </div>
                    </Subjects>
                    <Subjects>
                        <div className="sidebar"/>
                        <div className="wrapper">
                            <h3>Matemática Financeira</h3>
                            <span>25 alunos matriculados</span>
                        </div>
                    </Subjects>
                </ListSubject>
            </LeftSide>
            <RightSide>
                <WelcomeImage src={illustration} alt="Professor" />
            </RightSide>
        </Container>
    )
}

export default Classes