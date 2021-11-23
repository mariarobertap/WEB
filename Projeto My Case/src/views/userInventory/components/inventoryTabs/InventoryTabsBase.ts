import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	font-family: "Montserrat", sans-serif;
	border: 1px solid rgba(81, 87, 101, 0.2);
	border-top: 0;
	border-left: 0;
	border-right: 0;
	padding-left: 2em;
`;

export const TabButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 5.5em;
	height: 3em;
	border: 0;
	background-color: transparent;
	font-family: "Montserrat", sans-serif;
	color: white;
	font-size: 0.9em;
	cursor: pointer;
	font-weight: 600;
`;
