import { useCallback, useEffect, useState } from "react";
import { GunDTO } from "../../dataTransferObject/DTOs";
import InventoryHeader from "./components/inventoryHeader/InventoryHeader";
import GunModal from "./components/inventoryList/components/showGunModal/GunModal";
import InventoryList from "./components/inventoryList/InventoryList";
import InventoryTabs from "./components/inventoryTabs/InventoryTabs";
import { Container } from "./UserInventoryBase";

function UserInventory() {
  const [selectedGun, setSelectedGun] = useState<GunDTO>();
  const [selectedGunIndex, setSelectedGunIndex] = useState<number>();
  const [userGuns, setUserGuns] = useState<GunDTO[]>([]);

  const getUserGuns = useCallback(() => {
    const guns: string | null = localStorage.getItem("userGuns");
    if (guns !== null) {
      setUserGuns(JSON.parse(guns));
    }
  }, []);

  function closeModal() {
    setSelectedGun(undefined);
  }

  function changeSelectedGun(gun: GunDTO, index: number) {
    setSelectedGun(gun);
    setSelectedGunIndex(index);
  }

  function changeUserMoney(gun: GunDTO) {
    const gunPrice: number = gun.gunValue;
    const userCurrentMoney: string | null = localStorage.getItem("userMoney");
    if (userCurrentMoney !== null) {
      const newMoneyCurrence: number = Number(userCurrentMoney) + gunPrice;
      localStorage.setItem("userMoney", String(newMoneyCurrence));
    } else {
      localStorage.setItem("userMoney", String(gunPrice));
    }
  }

  function changeUserGuns(newGunArray: GunDTO[]) {
    if (newGunArray.length > 0) {
      localStorage.setItem("userGuns", JSON.stringify(newGunArray));
    }
  }

  function sellGun() {
    if (selectedGun) {
      const gun: GunDTO = selectedGun;
      const newGunArray: GunDTO[] = [];
      console.log(userGuns.length);
      if (userGuns.length > 1) {
        userGuns.forEach((gun: GunDTO, index: number) => {
          if (index !== selectedGunIndex) {
            newGunArray.push(gun);
          }
        });

        changeUserGuns(newGunArray);
      } else {
        localStorage.removeItem("userGuns");
      }
      changeUserMoney(gun);
    }

    closeModal();
    window.location.reload();
  }

  useEffect(() => {
    getUserGuns();
  }, [getUserGuns]);

  return (
    <>
      <Container>
        <InventoryHeader />
        <InventoryTabs />
        <InventoryList
          changeSelectedGun={changeSelectedGun}
          userGuns={userGuns}
        />
      </Container>
      {selectedGun ? (
        <GunModal
          gun={selectedGun}
          closeModal={closeModal}
          sellbutton={sellGun}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default UserInventory;
