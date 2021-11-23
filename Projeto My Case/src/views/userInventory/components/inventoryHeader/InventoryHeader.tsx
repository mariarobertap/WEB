import {
  Container,
  SocialMediaButton,
  SocialMediaContainer,
  SocialMediaIcon,
  SocialMediaIcons,
  TitleDescription,
} from "./InventoryHeaderBase";
import YoutubeIcon from "../../../../images/icons/youtubeIcon.svg";
import TwitterIcon from "../../../../images/icons/facebookIcon.svg";
import FacebookIcon from "../../../../images/icons/twitterIcon.svg";
import Profile from "./components/profile/Profile";

function InventoryHeader() {
  return (
    <Container>
      <Profile />
      <SocialMediaContainer>
        <TitleDescription>Connect with social network</TitleDescription>
        <SocialMediaIcons>
          <SocialMediaButton>
            <SocialMediaIcon src={TwitterIcon} />
          </SocialMediaButton>
          <SocialMediaButton>
            <SocialMediaIcon src={FacebookIcon} />
          </SocialMediaButton>
          <SocialMediaButton>
            <SocialMediaIcon src={YoutubeIcon} />
          </SocialMediaButton>
        </SocialMediaIcons>
      </SocialMediaContainer>
    </Container>
  );
}

export default InventoryHeader;
