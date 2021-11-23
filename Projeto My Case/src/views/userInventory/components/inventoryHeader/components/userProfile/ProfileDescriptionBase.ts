import styled from "styled-components";

export const UserProfileContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 4em;
	font-size: 18px;
	font-weight: 550;
	font-family: "Montserrat", sans-serif;
	background-color: #101117;
`;

interface TextProps {
	color: string;
	marginRight?: number;
}

export const Text = styled.label<TextProps>`
	color: ${(props) => props.color};
	margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}em;
`;
