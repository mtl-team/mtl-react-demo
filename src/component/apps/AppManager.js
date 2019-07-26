import React, { Component } from 'react';
import { Carousel, Icon, List, Drawer } from 'antd';
import { Link } from "react-router-dom";
import TabTitltImage from "../../module/TabTitltImage";

import './AppManager.css';

class AppManager extends Component {
  constructor(props) {    
    super(props)
    this.state = {
      data: [],
      rowData: [],
      applicationData: [],
      listData: [],
      isSelect: false,// 是否选择了空间按钮
      enterpriseList: [],
      enterpriseTitle: '用友集团',
    };
  }
  // 请求
  componentDidMount() {
    this.setState({
      data:['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      rowData: [{ img: './img/position.png', name: "位置", url:"http://www.baidu.com" },
              { img: './img/examination-approval.png', name: "审批中心", url:"http://www.baidu.com"},
              { img: './img/release-management.png', name: "发文", url:"http://www.baidu.com" },
              { img: './img/pending-order.png', name: "待付款订单", url:"http://www.baidu.com" }],
      applicationData: [[{ img: './img/position.png', name: "位置1", url:"http://www.baidu.com" },
              { img: './img/examination-approval.png', name: "审批中心1", url:"http://www.baidu.com" },
              { img: './img/release-management.png', name: "发文1", url:"http://www.baidu.com" },
              { img: './img/pending-order.png', name: "待付款订单1", url:"http://www.baidu.com" },
              { img: './img/examination-approval.png', name: "审批中心2", url:"http://www.baidu.com" },
              { img: './img/position.png', name: "位置2", url:"http://www.baidu.com" },
              { img: './img/release-management.png', name: "发文2", url:"http://www.baidu.com" },
              { img: './img/pending-order.png', name: "待付款订单2", url:"http://www.baidu.com" },
              { img: './img/release-management.png', name: "发文3", url:"http://www.baidu.com" },
              { img: './img/position.png', name: "位置3", url:"http://www.baidu.com" },
              { img: './img/examination-approval.png', name: "审批中心3", url:"http://www.baidu.com" },
              { img: './img/pending-order.png', name: "待付款订单3", url:"http://www.baidu.com" }],
              [{ img: './img/pending-order.png', name: "待付款订单4", url:"http://www.baidu.com" },
              { img: './img/position.png', name: "位置4", url:"http://www.baidu.com" },
              { img: './img/examination-approval.png', name: "审批中心4", url:"http://www.baidu.com" },
              { img: './img/release-management.png', name: "发文4", url:"http://www.baidu.com" },
              { img: './img/examination-approval.png', name: "审批中心5", url:"http://www.baidu.com" },
              { img: './img/release-management.png', name: "发文5", url:"http://www.baidu.com" },
              { img: './img/position.png', name: "位置5", url:"http://www.baidu.com" },
              { img: './img/pending-order.png', name: "待付款订单5", url:"http://www.baidu.com" },
              { img: './img/examination-approval.png', name: "审批中心6", url:"http://www.baidu.com" },
              { img: './img/position.png', name: "位置6", url:"http://www.baidu.com" },
              { img: './img/release-management.png', name: "发文6", url:"http://www.baidu.com" },
              { img: './img/pending-order.png', name: "待付款订单6", url:"http://www.baidu.com" }]],
      listData: ['第一行', '第二行', '第三行', '第四行', '第五行'],
      enterpriseList: [{ img: './img/enterprise.png', name: "全新有谱" },
                      { img: './img/enterprise.png', name: "用友集团" },
                      { img: './img/enterprise.png', name: "用友超客" }],
    })
  }
  
  // 选择空间
  choiceSpace = () => {
    this.setState({
      isSelect: !this.state.isSelect,
    })
  }

  // 选择广告
  selectAD = (data) => {
    console.log('selectAD ' + data)
  }

  // 置顶按钮点击事件
  fixedApplication(val) {
    window.location.href = val.url;
  }
  // 常用按钮点击事件
  rowApplication(appVal) {
    window.location.href = appVal.url;
  }
  // 列表点击事件
  selectList(data) {
    console.log('selectList', data)
  }

  onClose = () => {
    this.setState({
      isSelect: false,
    });
  };

  selectEnterprise = (data) => {
    this.setState({
      isSelect: false,
      enterpriseTitle: data.name,
    })
  };

  render() {
    // 旋转角度
    var rotate = -45;
    if (this.state.isSelect) {
      rotate = 135;
    }
    // 选择企业高度
    let height = this.state.enterpriseList.length * 35 + 20 * 2;
    
    // 常用应用
    function CarouseApplication(props) {
      return (
        <Carousel dots>
          {props.data.map((val, index) => (
            <div key={index} className="gutter-example">
              <TabTitltImage listData={val} onClickButton={props.click} />
            </div>
          ))}
        </Carousel>
      );
    }
    // 抽屉
    function SelectDrawer(props) {
      return (
        <Drawer
          height={height}
          placement="top"
          closable={false}
          onClose={props.onClose}
          visible={props.data.isSelect}>
          {props.data.enterpriseList.map((val, index) => {
            var color = 'black';
            if (val.name === props.data.enterpriseTitle) {
              color = 'red';
            }
            return (
              <div key={index} className="selectEnterpriseDiv">
                <div className="selectEnterpriseImgBackground">
                  <img className="selectEnterpriseImg" src={val.img} alt="" />
                </div>
                <p onClick={props.selectEnterprise.bind(this, val)} style={{ color: color }}>{val.name}</p>
              </div>
            )
          })}
        </Drawer>
      );
    }
    return (
      <div className="appManager">
        <div>
          <div style={{ display: 'flex', backgroundColor: 'white', width: '100%', justifyContent: 'space-between' }}>
            <div className="navStyle">
              <div className="navTitle" onClick={this.choiceSpace}>
                <h4>{this.state.enterpriseTitle}</h4>
              </div>
              <div className="navIcon">
                <Icon type="caret-down" rotate={rotate} />
              </div>
            </div>
            <Link className="navRightIcon" to="/AppSetting">
              <Icon type="appstore" style={{ color: '#1e1e1e' }} />
            </Link>
          </div>
        </div>
        <div style={{height: 'calc(100% - 44px)', overflowY: 'scroll'}}>
          <div className="flashview">
            <Carousel autoplay dots>
              {this.state.data.map((val, index) => (
                <img key={index} src={`https://zos.alipayobjects.com/rmsportal/${val}.png`} alt="" onClick={this.selectAD.bind(this, val)} />
              ))}
            </Carousel>
          </div>
          <div className="fixedApplication">
            <div className="gutter-example">
              <TabTitltImage listData={this.state.rowData} onClickButton={this.fixedApplication} />
            </div>
          </div>
          <div className="key-applications">
            <div className="applicationNav">
              <h4>常用应用</h4>
              <Link className="navRightIcon" to="/AppSetting">
                <Icon type="right" style={{ color: '#1e1e1e' }} />
              </Link>
            </div>
            <div className="lightGray">
              <CarouseApplication data={this.state.applicationData} click={this.rowApplication} />
            </div>
          </div>
          <div className="listStyle">
            <List itemLayout='horizontal' dataSource={this.state.listData} renderItem={item => (
              <List.Item onClick={this.selectList.bind(this, item)}>
                <List.Item.Meta
                  title={item}
                />
              </List.Item>
            )} />
          </div>
          <SelectDrawer data={this.state} onClose={this.onClose} selectEnterprise={this.selectEnterprise} />
        </div>
      </div>
    );
  }
}

export default AppManager;
