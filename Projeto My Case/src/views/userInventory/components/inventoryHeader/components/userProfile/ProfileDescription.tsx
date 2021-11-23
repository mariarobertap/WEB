import Icon from "../../../../../../generics/iconComponent/Icon";
import { UserProfileContainer, Text } from "./ProfileDescriptionBase";
import UserIcon from "../../../../../../images/icons/profileIcon.svg";

function ProfileDescription() {
	return (
		<UserProfileContainer>
			<Icon width={"1.3em"} src={UserIcon} marginRight={0.3} />
			<Text color={"white"} marginRight={0.5}>
				_pHeniX
			</Text>
			<Text color={"#515765"} marginRight={0.5}>
				|
			</Text>
			<Text color={"#515765"}>User Profile</Text>
		</UserProfileContainer>
	);
}

export default ProfileDescription;
