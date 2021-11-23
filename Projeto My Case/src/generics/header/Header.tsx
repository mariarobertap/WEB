import {
  Container,
  HeaderNavContainer,
  Logo,
  LogoContainer,
  MoneyCount,
  SubContainer,
} from "./HeaderBase";
import WebLogo from "../../images/icons/logo.svg";
import HeaderNav from "./components/headerNav/HeaderNav";
import UserProfile from "./components/userProfile/UserProfile";
import { Link } from "react-router-dom";
import { navBarItems } from "../utils/NavbarItems";
import { useCallback, useEffect, useState } from "react";

function Header() {
  const [userMoney, setUserMoney] = useState<number>(0);

  const getUserMoney = useCallback(() => {
    const money: string | null = localStorage.getItem("userMoney");
    if (money !== null) setUserMoney(Number(money));
  }, []);

  useEffect(() => {
    getUserMoney();
  }, [getUserMoney]);

  return (
    <Container>
      <SubContainer>
        <Link to="/store" style={{ textDecoration: "none" }}>
          <LogoContainer>
            <Logo src={WebLogo} />
            MyCase
          </LogoContainer>
        </Link>
        <HeaderNavContainer>
          {navBarItems.map((value) => {
            return (
              <HeaderNav
                navTitle={value.title}
                navIcon={value.icon}
                navHoverIcon={value.hoverIcon}
              />
            );
          })}
        </HeaderNavContainer>
      </SubContainer>
      <SubContainer>
        <UserProfile />
        <MoneyCount>R$ {userMoney}</MoneyCount>
      </SubContainer>
    </Container>
  );
}

export default Header;
