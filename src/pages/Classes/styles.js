import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LeftSide = styled.section`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.div`

    width: 100%;

    > h3 {
        padding-left: 30px;
        color: var(--white); 
        font-size: 25px;
        max-width: 220px;
    }
`

export const ListSubject = styled.ul`
    width: 80%;
    height: 400px;
    background: var(--dark-gray);
    border-radius: 8px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }   
`

export const Subjects = styled.li`
    width: 100%;
    height: 80px;
    background: var(--white);
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    margin-bottom: 1px;

    display: flex;
    justify-content: space-between;
    transition: filter background-color 300ms;
    
    > .wrapper {

        width: calc(100% - 10px);
        display: flex;
        flex-direction: column;

        & > h3 {
            padding: 5px 0 0 20px;
            color: var(--secondary);
            font-size: 20px;
            font-weight: 600;
        }   

        & > span {
            padding: 5px 10px 0 0;
            font-size: 15px;
            text-align: end;
            color: var(--font-dark);
        }

    }

    &:nth-child(n+2){
        border-radius: 0;
    }

    > .sidebar {
        height: 100%;
        width: 10px;
        background: var(--dark-gray);
    }

    &:hover,
    &:focus {

        filter:brightness(95%);
        
        > .sidebar {
            background: var(--secondary);
        }   
    }


`

export const RightSide = styled.section`
    display: none;
`

export const WelcomeImage = styled.img`
    height: 100px;

`