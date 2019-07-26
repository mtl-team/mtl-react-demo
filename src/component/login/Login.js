import React from "react";
import { Input, Button } from "antd";
import "./Login.css";

import logo from "../../public/icon/mtl_icon.png";
import loginBg from "../../public/icon/xyjy2.jpg";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameValue: "", password: "" };
  }

  render() {
    const onNameInputChange = e => {
      this.setState({ nameValue: e.target.value });
    };
    const onPasswordChange = e => {
      this.setState({ password: e.target.value });
    };
    return (
      <div className="main">
        <img className="login-bg" src={loginBg} alt="" />
        <div className="login-content">
          <div
            style={{
              borderRadius: "5px",
              overflow: "hidden",
              width: "58px",
              height: "58px"
            }}
          >
            <img className="head-icon" src={logo} alt="" />
          </div>
          <div className="slogan">欢迎来到MTL门户空间</div>
          <Input
            className="input"
            placeholder="手机号"
            allowClear
            onChange={onNameInputChange}
          />
          <Input.Password
            className="input"
            placeholder="密码"
            onChange={onPasswordChange}
          />

          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "8px" }}
          >
            <div style={{ flexGrow: 1 }} />
            <div className="forget">忘记密码</div>
          </div>
          <Button className="btn-login" type="danger" block 
              onClick={() => this.props.history.push("/apps")}>
            登录
          </Button>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            <div className="bottom-text">验证码登录</div>
            <div style={{ flexGrow: 1 }} />
            <div className="bottom-text">注册</div>
          </div>
        </div>
      </div>
    );
  }
}
