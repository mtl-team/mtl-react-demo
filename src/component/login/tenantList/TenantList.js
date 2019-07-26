import React from "react";
import { List, Button } from "antd";

import "./TenantList.css";

export default class TenantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenantList: [],
      disabled: true
    };
  }

  componentDidMount() {
    /* window.mtl.getStorage({
      domain: "portal",
      key: "tenantList",
      success: function(res) {
        let value = JSON.parse(res.data);
        if (value !== null && value.length > 0) {
          value.forEach((element, index) => {
            element.checked = false;
            element.id = index;
          });
          this.setState({
            tenantList: value
          });
        }
      }
    }); */

    const value = [
      {
        title: "Ant Design Title 1"
      },
      {
        title: "Ant Design Title 2"
      },
      {
        title: "Ant Design Title 3"
      },
      {
        title: "Ant Design Title 4"
      },
      {
        title: "Ant Design Title 5"
      },
      {
        title: "Ant Design Title 6"
      }
    ];

    if (value !== null && value.length > 0) {
      value.forEach((element, index) => {
        element.checked = false;
        element.id = index;
      });
      this.setState({
        tenantList: value
      });
    }
  }

  render() {
    const onItemClick = item => {
      item.checked = true;
      this.state.tenantList.forEach((element, index) => {
        if (element.id === item.id) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      });
      this.setState({
        tenantList: this.state.tenantList,
        disabled: false
      });
    };

    return (
      <div className="main">
        <h2>请选择要进入的空间：</h2>
        <List
          className="list"
          itemLayout="horizontal"
          dataSource={this.state.tenantList}
          renderItem={item => (
            <List.Item
              className={item.checked ? "item-checked" : "item-unchecked"}
              onClick={onItemClick.bind(this, item)}
            >
              <List.Item.Meta size="large" title={item.title} />
            </List.Item>
          )}
        />
        <Button
          className="btn-sure"
          type="danger"
          disabled={this.state.disabled}
          block
          onClick={() => this.props.history.push("/myPage")}
        >
          确定
        </Button>
        <div />
      </div>
    );
  }
}
