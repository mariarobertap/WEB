import { IconImage } from "./IconBase";

type Props = {
	width: string;
	src: string;
	marginRight?: number;
	marginLeft?: number;
	marginTop?: number;
	marginBottom?: number;
};

function Icon(props: Props) {
	const { width, src, marginRight, marginLeft, marginTop, marginBottom } =
		props;
	return (
		<IconImage
			draggable={false}
			width={width}
			src={src}
			marginRight={marginRight}
			marginLeft={marginLeft}
			marginTop={marginTop}
			marginBottom={marginBottom}
		/>
	);
}

export default Icon;
