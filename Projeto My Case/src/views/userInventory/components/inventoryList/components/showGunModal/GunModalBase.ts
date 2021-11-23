import styled from "styled-components";

interface ContainerProps {
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "100vh")};
  position: absolute;
  background-color: black;
  opacity: 0.7;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalTitle = styled.h2`
  font-weight: 550;
  color: white;
  margin: 0 0 0 0;
`;

interface LineProps {
  color: string;
}

export const Line = styled.hr<LineProps>`
  width: 19em;
  border: 2px solid ${(props) => props.color};
  box-shadow: 1px 2px 3px black;
`;

export const GunCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4c4f56;
  opacity: 0.5;
  width: 28em;
  height: 28em;
  border-radius: 50%;
  border: 0;
`;

export const GunImage = styled.img`
  width: 23em;
  margin-top: 7em;
  position: absolute;
`;

interface ButtonContainerProps {
  justifyContent: string;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  width: 20em;
  margin-top: 1em;
`;
