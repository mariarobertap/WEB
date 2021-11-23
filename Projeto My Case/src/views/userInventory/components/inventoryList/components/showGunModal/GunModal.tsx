import { GunDTO } from "../../../../../../dataTransferObject/DTOs";
import KeepButton from "../../../../../../generics/keepButton/KeepButton";
import SellButton from "../../../../../../generics/sellButton/SellButton";
import {
  ButtonContainer,
  Container,
  GunCircle,
  GunImage,
  Line,
  Modal,
  ModalTitle,
} from "./GunModalBase";

type Props = {
  height?: string;
  gun: GunDTO;
  sellbutton?: () => void;
  keepButton?: () => void;
  closeModal: () => void;
};

function GunModal(props: Props) {
  const { height, gun, sellbutton, keepButton, closeModal } = props;
  return (
    <>
      <Container height={height} onClick={() => closeModal()} />
      <Modal>
        <ModalTitle>{gun.description}</ModalTitle>
        <Line color={gun.gunRarity.color} />
        <GunCircle></GunCircle>
        <GunImage src={gun.gunImage} />
        {sellbutton || keepButton ? (
          <ButtonContainer
            justifyContent={
              sellbutton && keepButton ? "space-between" : "center"
            }
          >
            {sellbutton ? <SellButton click={sellbutton} /> : <></>}
            {keepButton ? <KeepButton click={keepButton} /> : <></>}
          </ButtonContainer>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
}

export default GunModal;
