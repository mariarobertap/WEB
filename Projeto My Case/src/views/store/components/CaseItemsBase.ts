import styled from "styled-components";
import backgroundCase from "../../../images/profileBackground.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundCase});
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
`;

export const ListItem = styled.li`
  height: fit-content;
  cursor: pointer;
`;

export const CaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

export const CaseSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2em;
`;

export const CaseTitle = styled.label`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-weight: 600;
  font-size: 25px;
  opacity: 1;
  margin-left: 9em;
  margin-top: -2em;
  margin-bottom: -1em;
`;

interface CaseValueDescriptionProps {
  marginLeft?: number;
  marginRight?: number;
  color?: string;
}

export const CaseButton = styled.button`
  width: 10em;
  height: 3em;
  background-color: #34553f;
  border-color: #43cd57;
  cursor: pointer;
`;

export const CaseValueDescription = styled.label<CaseValueDescriptionProps>`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: 700;
  cursor: pointer;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 1)}em;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 1)}em;
`;

interface CaseImageProps {
  isNotAbsolute?: boolean;
}

export const CaseDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CaseImage = styled.img<CaseImageProps>`
  width: 16em;
  position: ${(props) => (props.isNotAbsolute ? "initial" : "absolute")};
  margin-top: 1em;
  transition: 0.3s;
  padding-left: 3em;
`;

export const ModalRoulette = styled.div`
  background-color: black;
  opacity: 0.9;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 3em;
`;
