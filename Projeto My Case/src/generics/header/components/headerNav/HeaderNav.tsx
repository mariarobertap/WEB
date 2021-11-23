import { useEffect, useState } from "react";
import { Container, NavButton, NavIcon } from "./HeaderNavBase";

type Props = {
	navTitle: string;
	navIcon: string;
	navHoverIcon: string;
};

function HeaderNav(props: Props) {
	const { navTitle, navIcon, navHoverIcon } = props;
	const [isHover, setIsHover] = useState<boolean>(false);

	return (
		<Container>
			<NavButton
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<NavIcon src={isHover ? navHoverIcon : navIcon} />
				{navTitle}
			</NavButton>
		</Container>
	);
}

export default HeaderNav;
