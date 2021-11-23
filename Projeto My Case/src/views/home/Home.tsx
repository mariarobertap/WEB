import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../../generics/header/Header";
import Store from "../store/Store";
import UserInventory from "../userInventory/UserInventory";
import { Container } from "./HomeBase";

export default function Home() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/store" />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/inventory">
          <UserInventory />
        </Route>
      </Switch>
    </Container>
  );
}
