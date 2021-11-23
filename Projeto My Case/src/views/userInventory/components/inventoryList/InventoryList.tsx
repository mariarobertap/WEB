import { GunDTO } from "../../../../dataTransferObject/DTOs";
import { ListItem } from "../../../caseList/CaseListBase";
import GunCard from "./components/gunCard/GunCard";
import { List } from "./InventoryListBase";

type Props = {
  changeSelectedGun: (gun: GunDTO, index: number) => void;
  userGuns?: GunDTO[];
};

function InventoryList(props: Props) {
  const { changeSelectedGun, userGuns } = props;

  return (
    <List>
      {userGuns && userGuns.length > 0 ? (
        userGuns.map((value: GunDTO, index: number) => {
          return (
            <ListItem>
              <GunCard
                gunRarity={value.gunRarity.color}
                gunImage={value.gunImage}
                gunName={value.description}
                gunValue={value.gunValue}
                gun={value}
                index={index + 1}
                changeSelectedGun={changeSelectedGun}
              />
            </ListItem>
          );
        })
      ) : (
        <></>
      )}
    </List>
  );
}

export default InventoryList;
