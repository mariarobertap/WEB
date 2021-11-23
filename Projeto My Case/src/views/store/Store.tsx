import {
  CaseContainer,
  CaseTitle,
  CaseValueDescription,
  Container,
  ListItem,
  List,
  CaseImage,
} from "./StoreBase";
import { CaseDTO } from "../../dataTransferObject/DTOs";
import { useEffect, useState } from "react";
import CaseItems from "./components/CaseItems";
import { SeedCases } from "../../generics/utils/SeedCases";
import { Switch, Route, useHistory } from "react-router-dom";
import CaseRoulette from "../../generics/caseRoulette/CaseRoulette";

function Store() {
  const [cases, setCases] = useState<CaseDTO[]>(SeedCases());
  const [caseDTO, setCaseDTO] = useState<CaseDTO>();
  const history = useHistory();

  return (
    <Container>
      <Switch>
        <Route exact path="/store">
          <List>
            {cases.map((value) => {
              return (
                <>
                  <ListItem key={value.description}>
                    <CaseContainer>
                      <CaseTitle>{value.description}</CaseTitle>
                      <CaseImage
                        draggable={false}
                        src={value.caseImage}
                        onClick={() => {
                          setCaseDTO(value);
                          history.push(
                            `/store/${value.description
                              .toLocaleLowerCase()
                              .replaceAll(" ", "-")}`
                          );
                        }}
                      />
                      <CaseValueDescription>
                        OPEN
                        <CaseValueDescription
                          marginRight={0.3}
                          marginLeft={1}
                          color="#2abd69"
                        >
                          $
                        </CaseValueDescription>
                        {value.caseValue === 0 ? "FREE" : value.caseValue}
                      </CaseValueDescription>
                    </CaseContainer>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Route>
        <Route path="/store/:case">
          <CaseItems caseDTO={caseDTO} />
        </Route>
      </Switch>
    </Container>
  );
}

export default Store;
