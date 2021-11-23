import React from "react";
import { Container, TabButton } from "./InventoryTabsBase";
import CaseIcon from "../../../../images/icons/caseIcon.svg";
import Icon from "../../../../generics/iconComponent/Icon";

function InventoryTabs() {
	return (
		<Container>
			<TabButton>
				<Icon width={"1.4em"} src={CaseIcon} marginRight={0.5} />
				ITEMS
			</TabButton>
		</Container>
	);
}

export default InventoryTabs;
