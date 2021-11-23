import { TitleDescription } from "../../InventoryHeaderBase";
import {
	ProfileContainer,
	ProfileDescritpionContainer,
	ProfilePictureImage,
	ProfileSubContainer,
} from "./ProfileBase";
import ProfileImage from "../../../../../../images/profilePicture/profilePicture.png";

function Profile() {
	return (
		<ProfileContainer>
			<ProfileSubContainer>
				<ProfilePictureImage src={ProfileImage} />
				<ProfileDescritpionContainer>
					<TitleDescription>_pHeniX</TitleDescription>
				</ProfileDescritpionContainer>
			</ProfileSubContainer>
		</ProfileContainer>
	);
}

export default Profile;
