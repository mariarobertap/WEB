import styled, { keyframes } from "styled-components";
import GunCardBackground from "../../images/gunCardBackgroundImage.png";

interface ContainerProps {
  borderColor: string;
}

interface RouletteProps {
  left: string;
  isRouletteAnimation?: boolean;
}

export const RouletteAnimation = (props: RouletteProps) => keyframes`
  0% { left: 0; }
  100% { left: ${props.left} }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Roulette = styled.div<RouletteProps>`
  display: flex;
  left: ${(props) => (props.isRouletteAnimation ? 0 : props.left)};
  animation-name: ${(props) => RouletteAnimation(props)};
  animation-delay: 1s;
  animation-duration: 4s;
  overflow-x: hidden;
  position: absolute;
`;

export const GunCard = styled.div<ContainerProps>`
  display: flex;
  width: 16em;
  height: 8em;
  align-items: center;
  justify-content: center;
  border: 4px solid ${(props) => props.borderColor};
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  font-family: "Montserrat", sans-serif;
  color: white;
  background: #1b1c25 url(${GunCardBackground}) 50% / cover no-repeat;
  margin-right: 0.7em;
  flex: none;
  object-fit: cover;
`;

export const GunImage = styled.img`
  width: 7.9em;
  align-self: center;
`;

export const RouletteLine = styled.hr`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 2.4em;
  margin-bottom: 0;
  height: 7.9em;
  position: absolute;
  color: green;
`;

export const Shadow = styled.div`
  width: 5em;
  height: 8em;
  position: absolute;
  z-index: 99;
  background-color: black;
  opacity: 1;
  box-shadow: 0px 6px 6px black;
`;
