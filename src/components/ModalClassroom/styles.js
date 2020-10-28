import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    
    background: rgba(0, 0, 0, 0.7);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.section`
    width: 330px;
    height: 80vh;
    background: var(--light-gray);

    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1080px) {
        width: 1000px;
        height: 600px;
    }
`

export const Header = styled.header`
    height: 30%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > p {
        margin-left: 15px;
        font-weight: 600;
        color: var(--secondary);
    }

    @media (min-width: 1080px) {
        margin-top: 50px;
        flex-direction: row;
        font-size: 18px;

        justify-content: space-around;
        
        > p + p {
            width: 350px;
        }
    }
`

export const YesOrNo = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
`

export const ButtonYes = styled.button`
    height: 35px;
    width: 60px;

    background: var(--secondary);
    border-radius: 8px;

    color: var(--white);
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;

    &:hover {
        filter:brightness(90%);
    }

`

export const ButtonNo = styled.button`
    height: 35px;
    width: 60px;

    background: var(--primary);
    border-radius: 8px;
    margin-left: 15px;

    color: var(--white);
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;

    &:hover {
        filter:brightness(90%);
    }

`

export const ListGroup = styled.section`
    display: flex;
    flex-direction: column;

    height: 70%;

    @media (min-width: 1080px) {
        width: 90%;
    }
`

export const Title = styled.h4`
    font-size: 15px;
    font-weight: 600;
    color: var(--secondary);
    margin: 0 0 10px 15px;
`

export const ListStudent = styled.ul`
    height: calc(100% - 25px);
    width: 100%;
    border-radius: 0 0 8px 8px;
    background: var(--dark-gray);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    } 
`
export const Card = styled.li`
    width: 100%;
    height: 80px;
    background: var(--white);
    padding-right: 20px; 
    margin-top: 1px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        font-size: 15px;
        color: var(--secondary);
        padding-left: 30px;
    }

    @media (min-width: 1080px) {
        border-right: 1px solid var(--dark-gray); 
        border-left: 1px solid var(--dark-gray);
    }
`









