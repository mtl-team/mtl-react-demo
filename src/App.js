import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Login from "./component/login/Login";
import AppManager from "./component/apps/AppManager";
import AppSetting from "./component/apps/AppSetting";
import MyPage from "./component/my/MyPage";
import Splash from "./component/splash/Splash";
import TenantList from "./component/login/tenantList/TenantList";

function App() {
  return (
    <Router>
      <Route path="/" component={Splash} />
      <Route path="/login" component={Login} />
      <Route exact path="/tenantList" component={TenantList} />
      <Route path="/apps" component={AppManager} />
      <Route path="/appSetting" component={AppSetting} />
      <Route path="/myPage" component={MyPage} />
    </Router>

  );
}

export default App;
