import React from "react";
import {Row, Col} from 'antd';
import ListTitleImage from "../../module/ListTitleImage";

import "./MyPage.css";
const icon1 = './img/my/kongjianguanlixuan.png';
const icon2 = './img/my/chuanshuliebiao.png';
const icon3 = './img/my/hongbao.png';
const icon4 = './img/my/jindou-.png';
const icon5 = './img/my/quanyizhiquan.png';
const icon6 = './img/my/xin.png';
const icon7 = './img/my/setting.png';
const icon8 = './img/my/bianji.png';
const iconQR = './img/my/qrcode.png';

export default class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData:[[{name : "管理空间", img: icon1},
                {name : "文件传输列表", img: icon2}],
                [{name : "红包", img: icon3},
                {name : "金豆", img: icon4},
                {name : "权益中心", img: icon5},
                {name : "服务中心", img: icon6}],
                [{name : "设置", img: icon7}]],
      // listData:[{title:"入库管理", cells:[{name : "管理空间", img: icon1},
      //           {name : "文件传输列表", img: icon2}]},
      //           {title:"入库管理", cells:[{name : "红包", img: icon3},
      //           {name : "金豆", img: icon4},
      //           {name : "权益中心", img: icon5},
      //           {name : "服务中心", img: icon6}]},
      //           {title:"入库管理", cells:[{name : "设置", img: icon7}]}],
      topTabData:[{name: "日程", number:10},
                  {name: "发言", number:1},
                  {name: "收藏", number:4},
                  {name: "荣耀", number:387}],
    };

  }

  selectPhoto = () => {
    console.log('selectPhoto');
  }

  selectUserInfo = () => {
    console.log('selectUserInfo');
  }

  selectQRCode = () => {
    console.log('selectQRCode');
  }

  selectTopTab(val) {
    console.log('selectTopTab' + val);
  }

  selectList = (val) => {
    console.log('selectList' + val);
  }
  
  render() {
    return (
      <div className="myPage">
        <div className="background">
          <div className="image">
            {/*背景图片  */}
          </div>
          <div className="user" >
            <div className="user_infor" >
              <img className="photo" src={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`} 
                    onClick={this.selectPhoto} alt=""/>          
              <div style={{marginLeft:'10px',color:'white'}} onClick={this.selectUserInfo}>
                <div className="name">
                  <div>韩波</div>
                  <img style={{marginLeft:'5px', width:'15px', height:'15px'}} src={icon8} alt="" />
                </div>
                <div className="position">开发工程师</div>
              </div>
            </div>
            <div className="user_qrCode" onClick={this.selectQRCode}>
              <img style={{width:'30px', height:'30px'}} src={iconQR} alt="" />
            </div>
          </div>
        </div>
        <div className="listScroll">
          <div className="topTab"> 
            <Row gutter={8}>
              {this.state.topTabData.map((val, index) => (
                <Col key={index} className="gutter-row" span={6} onClick={this.selectTopTab.bind(this, val)}>
                  <div className="fixedApplicetionItem">
                    <div>{val.number}</div>
                    <div style={{fontsize: 'small'}}>{val.name}</div>
                  </div>
                  </Col>
              ))}
            </Row>
          </div>
          <div className="list">
            <ListTitleImage onClickButton={this.selectList} listData={this.state.listData}/>
          </div>
        </div>
      </div>
    );
  }
}
