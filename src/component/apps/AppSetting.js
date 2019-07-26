import React, { Component } from 'react';
import { Icon, Layout, Input, Tabs, message, } from 'antd';
import TabTitltImage from "../../module/TabTitltImage";

import './AppSetting.css';

const { TabPane } = Tabs;
const { Header, Content } = Layout;

class AppSetting extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isSelectStting: false,
        searchResult: null,
        scrollIndex: 0,
        apps:[],
        applicationData:[],
        needFixed : false,
      }
      this.bindScroll = this.bindScroll.bind(this);
    }
    // 滑动事件
    componentDidMount() {
      // 挂载页面滚动监听
      document.getElementById('display').addEventListener('scroll', this.bindScroll);
      this.setState({
        apps: [{ img: './img/position.png', name: "位置1" },
            { img: './img/examination-approval.png', name: "审批中心1" },
            { img: './img/release-management.png', name: "发文1" },
            { img: './img/pending-order.png', name: "待付款订单1" },
            { img: './img/examination-approval.png', name: "审批中心2" },
            { img: './img/position.png', name: "位置2" },
            { img: './img/release-management.png', name: "发文2" },
            { img: './img/pending-order.png', name: "待付款订单2" },
            { img: './img/release-management.png', name: "发文3" },
            { img: './img/position.png', name: "位置3" },
            { img: './img/examination-approval.png', name: "审批中心3" },
            { img: './img/pending-order.png', name: "待付款订单3" },
            { img: './img/pending-order.png', name: "待付款订单4" },
            { img: './img/position.png', name: "位置4" },
            { img: './img/examination-approval.png', name: "审批中心4" },
            { img: './img/release-management.png', name: "发文4" },
            { img: './img/examination-approval.png', name: "审批中心5" },
            { img: './img/release-management.png', name: "发文5" },
            { img: './img/position.png', name: "位置5" },
            { img: './img/pending-order.png', name: "待付款订单5" },
            { img: './img/examination-approval.png', name: "审批中心6" },
            { img: './img/position.png', name: "位置6" },
            { img: './img/release-management.png', name: "发文6" }],
        applicationData: [{
              name: "企业管理", apps: [{ img: './img/position.png', name: "位置1" },
                { img: './img/examination-approval.png', name: "审批中心1" },
                { img: './img/release-management.png', name: "发文1" },
                { img: './img/pending-order.png', name: "待付款订单1" },
                { img: './img/examination-approval.png', name: "审批中心7" },
                { img: './img/position.png', name: "位置7" },
                { img: './img/release-management.png', name: "发文7" },
                { img: './img/pending-order.png', name: "待付款订单7" },
                { img: './img/release-management.png', name: "发文8" },
                { img: './img/position.png', name: "位置3" },
                { img: './img/examination-approval.png', name: "审批中心8" },
                { img: './img/pending-order.png', name: "待付款订单3" }]
            },
            {
              name: "已停止应用", apps: [{ img: './img/position.png', name: "位置1" },
                { img: './img/examination-approval.png', name: "审批中心1" },
                { img: './img/release-management.png', name: "发文9" }]
            },
            {
              name: "报账应用", apps: [{ img: './img/position.png', name: "位置1" },
                { img: './img/examination-approval.png', name: "审批中心8" },
                { img: './img/release-management.png', name: "发文1" }]
            },
            {
              name: "知识|成长", apps: [{ img: './img/position.png', name: "位置9" },
                { img: './img/examination-approval.png', name: "审批中心9" },
                { img: './img/release-management.png', name: "发文9" }]
            },
            {
              name: "办公协作", apps: [{ img: './img/examination-approval.png', name: "审批中心7" },
                { img: './img/position.png', name: "位置7" },
                { img: './img/release-management.png', name: "发文7" },
                { img: './img/pending-order.png', name: "待付款订单7" },
                { img: './img/release-management.png', name: "发文8" },
                { img: './img/position.png', name: "位置3" }]
            },
            {
              name: "办公协作1", apps: [{ img: './img/examination-approval.png', name: "审批中心2" },
                { img: './img/position.png', name: "位置2" },
                { img: './img/release-management.png', name: "发文2" },
                { img: './img/pending-order.png', name: "待付款订单2" },
                { img: './img/release-management.png', name: "发文3" },
                { img: './img/position.png', name: "位置3" }]
            },
            {
              name: "办公协作2", apps: [{ img: './img/examination-approval.png', name: "审批中心2" },
                { img: './img/position.png', name: "位置2" },
                { img: './img/release-management.png', name: "发文9" },
                { img: './img/pending-order.png', name: "待付款订单2" },
                { img: './img/release-management.png', name: "发文9" },
                { img: './img/position.png', name: "位置3" }]
              }],
      })
    }
    componentWillUnmount() {
      document.getElementById('display').removeEventListener('scroll', this.bindScroll);
    }
    bindScroll(event) { 

      if (this.state.isSelectStting) {
        return;
      }    
      // 滚动的高度
      const scrollTop = (event.srcElement ? event.srcElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.scrollTop : 0);

      let affixHeader = document.getElementById("affixHeader");
      var fixedTop = 0;
      if (affixHeader) {
        fixedTop = affixHeader.offsetTop;
      }
      if (this.state.needFixed) {
        fixedTop -= 50;
      }
      if (scrollTop >= fixedTop) {
        this.setState({ needFixed: true })
      } else if (scrollTop < fixedTop) {
        this.setState({ needFixed: false })
      }
      console.log(scrollTop + "   " + this.state.needFixed + "   " + fixedTop);
      
      this.state.applicationData.forEach((val, index) => {
        let anchorElement = document.getElementById(val.name);
        let top = scrollTop + 94;
        if (top >= anchorElement.offsetTop && top < anchorElement.offsetTop + anchorElement.offsetHeight) {
          if (this.state.scrollIndex !== index) {
            this.setState({
              scrollIndex: index,
            }) 
          }
        }
      });
      if (this.state.applicationData.length > 0) {
        let index = 0;
        let val = this.state.applicationData[index];
        let anchorElement = document.getElementById(val.name);
        let top = scrollTop + 94;
        if (top < anchorElement.offsetTop) {
          if (this.state.scrollIndex !== index) {
            this.setState({
              scrollIndex: index,
            }) 
          }
        }
      }
    }
  
    // 设置按钮事件
    selectSetting() {
      this.setState({
        isSelectStting: !this.state.isSelectStting,
      })
    }
    // 搜索
    handleChange = (e) => {
      const value = e.currentTarget.value;
      var array = [];
  
      this.state.applicationData.forEach((val, index) => {
        val.apps.forEach((appsVal, appsIndex) => {
          if (appsVal.name.match(value)) {
            array.push(appsVal)
          }
        })
      })  
      if (value.length > 0) {
        this.setState({
          searchResult: array
        })
      } else {
        this.setState({ searchResult: null })
      }
    }
  
    // 按钮点击事件
    selectApp = (data, isCommonApp) => {
      if (this.state.isSelectStting) {
        if (isCommonApp) {// 常用应用删除
          this.setState({
            apps: this.state.apps.filter(item => (item.name !== data.name) )
          })
        } else if (this.state.apps.length >= 24) {// 超过限制
          message.error('常用应用已达24上限', 2)
        } else {
          // 是否已经在常用应用里面，不在则加入
          if (!this.state.apps.includes(data)) {
            this.setState({
              apps: this.state.apps.concat(data)
            })
          }
        }
      }
    }
    // 标签切换
    selectTab(key) {      
      this.setState({
        scrollIndex: parseInt(key),
      }) 
      console.log("4567890");
      
      var val = this.state.applicationData[parseInt(key)]
      if (val) {
        let anchorElement = document.getElementById(val.name);
        if (anchorElement) {
          document.getElementById("display").scrollTo(0, anchorElement.offsetTop - 95);
        }
      }
    }
  
    render() {
      var title = '设置';
      if (this.state.isSelectStting) {
        title = '完成'
      }
      
      const AppCell = (props) => {
        return (
          <div id={props.title}>
            <div className="header-Item">
              <div style={{ marginLeft: '10px', fontSize: '10px' }}>{props.title}</div>
            </div>
            <div>
              <TabTitltImage listData={props.data} onClickButton={props.click} 
                    isCommonApp={props.isCommonApp} isSelect={this.state.isSelectStting}
                    commonApps={this.state.apps} />
            </div>
          </div>
        );
      }
      const display = () => {
        return this.state.searchResult ?
          (<div>
            <TabTitltImage listData={this.state.searchResult} onClickButton={this.selectApp} 
                    isCommonApp={false} isSelect={this.state.isSelectStting}
                    commonApps={this.state.apps} />
          </div>
          ) : (
            <div className="display">
              <AppCell key='常用应用' data={this.state.apps} click={this.selectApp} title='常用应用(最多可设置24个)' isCommonApp={true}/>
              <Layout addEventListener>
                <Header id="affixHeader" >
                  <div className="affixStyle">
                    <Tabs activeKey={this.state.scrollIndex.toString()} onTabClick={this.selectTab.bind(this)}>
                      {
                        this.state.applicationData.map((val, index) => (
                          <TabPane tab={val.name} key={index} />
                        ))
                      }
                    </Tabs>
                  </div>
                </Header>
                <Content style={{height:'30px'}}>
                  {
                    this.state.applicationData.map((val, index) => (
                      <AppCell key={val.name} data={val.apps} click={this.selectApp} title={val.name} isCommonApp={false} />
                    ))
                  }
                </Content>
              </Layout>              
            </div>
          )
      }
      return (
        <div className="setting">
          <div className="navi">
            <div className="left-item" onClick={() => this.props.history.goBack()}>
              <Icon type="left" />
            </div>
            <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
              常用应用设置
            </div>
            <div className="right-item" onClick={this.selectSetting.bind(this)}>
              <div>{title}</div>
            </div>
          </div>
          <div className="navi-separator" />
          {
            this.state.needFixed ? (
              <div className="affixStyle">
                <Tabs activeKey={this.state.scrollIndex.toString()} onTabClick={this.selectTab.bind(this)}>
                  {
                    this.state.applicationData.map((val, index) => (
                      <TabPane tab={val.name} key={index} />
                    ))
                  }
                </Tabs>
              </div>
            ) : (<div />)
          }
          <div id="display" style={{overflowY:'scroll', height:'calc(100% - 44px)'}}>
            <div style={{ margin: '10px'}}>
              <Input
                allowClear={true}
                placeholder="搜索应用"
                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={this.handleChange}
              />
            </div>
            {display()}
          </div>
        </div>
      );
    }
  }
  
  export default AppSetting;
  