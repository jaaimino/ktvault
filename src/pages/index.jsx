import { Route, Switch } from "wouter";
import Factions from "./factions";
import Faction from "./faction";
import Team from "./team";
import Settings from "./settings";
import Home from "./home";
import Rules from "./rules";
import Scenarios from "./scenarios";

export default function Root() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/rules" component={Rules} />
      <Route path="/scenarios" component={Scenarios} />
      <Route path="/factions" component={Factions} />
      <Route path="/settings" component={Settings} />
      <Route path="/fa/:factionId" component={Faction} />
      <Route path="/fa/:factionId/kt/:killteamId" component={Team} />
      <Route>404: No such page!</Route>
    </Switch>
  );
}
