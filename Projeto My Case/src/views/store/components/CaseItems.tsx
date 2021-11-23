import { useState } from "react";
import { CaseDTO } from "../../../dataTransferObject/DTOs";
import CaseRoulette from "../../../generics/caseRoulette/CaseRoulette";
import GunCard from "../../userInventory/components/inventoryList/components/gunCard/GunCard";
import {
  List,
  ListItem,
  CaseContainer,
  CaseImage,
  CaseTitle,
  CaseValueDescription,
  Container,
  CaseButton,
  CaseSubContainer,
  ModalRoulette,
} from "./CaseItemsBase";

type Props = {
  caseDTO?: CaseDTO;
};

function CaseItems(props: Props) {
  const { caseDTO } = props;
  const [openCase, setOpenCase] = useState<boolean>(false);

  function buyCase() {
    const currentMoney: string | null = localStorage.getItem("userMoney");
    if (caseDTO) {
      if (currentMoney !== null && Number(currentMoney) >= caseDTO.caseValue) {
        const newUserMoney: number = Number(currentMoney) - caseDTO.caseValue;
        localStorage.setItem("userMoney", String(newUserMoney));
        setOpenCase(true);
      }
    }
  }
  return (
    <>
      {openCase ? (
        caseDTO ? (
          <CaseRoulette caseProps={caseDTO} />
        ) : (
          <></>
        )
      ) : (
        <Container>
          <CaseContainer>
            <CaseImage
              isNotAbsolute={true}
              draggable={false}
              src={caseDTO?.caseImage}
            />
            <CaseSubContainer>
              <h2>{caseDTO?.description}</h2>
              <CaseButton onClick={() => buyCase()}>
                <CaseValueDescription>
                  OPEN
                  <CaseValueDescription
                    marginRight={0.3}
                    marginLeft={1}
                    color="#2abd69"
                  >
                    $
                  </CaseValueDescription>
                  {caseDTO?.caseValue}
                </CaseValueDescription>
              </CaseButton>
            </CaseSubContainer>
          </CaseContainer>
          <List>
            {caseDTO?.caseGuns.map((value) => {
              return (
                <ListItem>
                  <GunCard
                    gunRarity={value.gunRarity.color}
                    gunImage={value.gunImage}
                    gunName={value.description}
                    gunValue={value.gunValue}
                    gun={value}
                  />
                </ListItem>
              );
            })}
          </List>
        </Container>
      )}
    </>
  );
}

export default CaseItems;
