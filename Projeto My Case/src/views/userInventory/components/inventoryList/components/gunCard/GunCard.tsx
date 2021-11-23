import { GunDTO } from "../../../../../../dataTransferObject/DTOs";
import {
  Container,
  GunCardFooter,
  GunCardHeader,
  GunImage,
  GunName,
  GunSkinName,
  GunValue,
} from "./GunCardBase";

type Props = {
  gunRarity: string;
  gunImage: string;
  gunName: string;
  gunValue: number;
  gun: GunDTO;
  index?: number;
  changeSelectedGun?: (gun: GunDTO, index: number) => void;
};

function GunCard(props: Props) {
  const {
    gunRarity,
    gunImage,
    gunName,
    gunValue,
    gun,
    index,
    changeSelectedGun,
  } = props;
  return (
    <Container
      onClick={() =>
        changeSelectedGun && index
          ? changeSelectedGun(gun, index - 1)
          : undefined
      }
      borderColor={gunRarity}
    >
      <GunCardHeader>
        <GunValue color="#2abd69" fontWeight={700} marginRight={0}>
          $
        </GunValue>
        <GunValue>{gunValue},00</GunValue>
      </GunCardHeader>
      <GunImage src={gunImage} />
      <GunCardFooter>
        <GunName>{gunName.slice(0, gunName.lastIndexOf("-") - 1)}</GunName>
        <GunSkinName>{gunName.slice(gunName.lastIndexOf("-") + 1)}</GunSkinName>
      </GunCardFooter>
    </Container>
  );
}

export default GunCard;
