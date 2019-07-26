import React from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import "./Splash.css";

import bgPic from "../../public/icon/xyjy.jpg";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //1是跳转登录页，2跳转选择租户，3跳转应用内首页
      loginFlag: 0
    };
  }

  /* {
    "code": "200",
    "message": "成功",
    "data":{
      "token":"ddddddd",
      "tenantList":[{
        "tenantName":"用友网络股份有限公司"，---租户名称
        "tenantCode":"yonyoucloud"，  ----租户编码
        "userName"："testUser1" -----该租户下面第三方账号编码
          "systemType":"NC",       -------绑定系统，比如NC、u8、友户通
          "bindStatus":true,         -----标记是否绑定，1表示成功，0表示没有绑定
        },
        {
        "tenantName":"abc企业"，
        "tenantCode":"abccode"，
        "userName"："testUser1",
          "bindStatus":false,
          "systemType":"U8",
        }
      ]}
  } */
  initData() {
    let platform = window.mtl.platform;
    if ("wx" === platform || "dd" === platform) {
      window.mtl.ucg.login({
        /* url: "http://approve.testopen.app.yyuap.com",
        code: "0d847f2af90231a898943c9720ed3012",
        appCode: "dingnlb2wikil7pldytf", */
        success: res => {
          console.log(res);
          if (res.tenantList !== null) {
            window.mtl.setStorage({
              domain: "portal", // 可选，缺省时使用默认的域
              key: "tenantList",
              data: res.tenantList // 支持 Number、String、及能够通过 JSON.stringify 序列化的对象。
            });
          }
        },
        fail: err => {
          console.log(err);
        }
      });
    } else if ("upesn" === platform) {
      //友空间
      this.setState({
        loginFlag: 3
      });
    } else {
      //原生
      this.setState({
        loginFlag: 1
      });
    }
  }

  componentDidMount() {
    this.initData(); 
    // this.timer = setTimeout(() => {
    //   this.setState({
    //     loginFlag: 1
    //   });
    // }, 1000);
  }

  //不用的是时候将其解绑
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    if (this.state.loginFlag === 2) {
      // return <Redirect to={{ pathname: "/" }} />;
      return <Redirect to="/login" />;
    } else if (this.state.loginFlag === 1) {
      return <Redirect to="/tenantList" />;
    } else if (this.state.loginFlag === 3) {
      return <Redirect to="/apps" />;
    }
    return (
      <div className="main">
        <img className="splash-bg" src={bgPic} alt="" />
        <div className="splash-content">
          {/* <Spin className="splash-prompt" size="large" tip="加载中..." /> */}
          <Loader type="Hearts" color="red" height="100" width="100" />
          <div className="splash-prompt">加载中...</div>
        </div>
      </div>
    );
  }
}
