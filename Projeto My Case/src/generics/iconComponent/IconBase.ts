import styled from "styled-components";

interface IconImageProps {
	width: string;
	marginRight?: number;
	marginLeft?: number;
	marginTop?: number;
	marginBottom?: number;
}

export const IconImage = styled.img<IconImageProps>`
	width: ${(props) => props.width};
	margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}em;
	margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}em;
	margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}em;
	margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}em;
`;
