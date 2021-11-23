import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    list-style: none;
    padding-left: 40px;
    padding-right: 40px;
`

export const ListItem = styled.li`
    height: fit-content;
    cursor: pointer;
`

export const CaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
    color: white;
    width: 16em;
    height: 13em;
`

export const CaseTitle = styled.label`
    font-family: "Montserrat", sans-serif;
    color: white;
    font-weight: 600;
`

interface CaseValueDescriptionProps {
    marginLeft?: number
    marginRight?: number
    color?: string
}

export const CaseValueDescription = styled.label<CaseValueDescriptionProps>`
    font-family: "Montserrat", sans-serif;
    color: ${props => props.color ? props.color : "white"};
    font-weight: 700;
    margin-left: ${props => props.marginLeft ? props.marginLeft : 0}em;
    margin-right: ${props => props.marginRight ? props.marginRight : 0}em;
`

export const CaseDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CaseImage = styled.img`
    width: 16em;
    position: absolute;
    margin-top: 1em;
    transition: 0.3s;
    :hover {
        margin-top: 0.3em;
    }
`