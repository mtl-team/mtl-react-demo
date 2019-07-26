import React from "react";
import {Row, Col} from 'antd';
import PropTypes from 'prop-types';

import "./TabTitltImage.css";

const icon1 = './img/duihao-copy.png';
const icon2 = './img/jia.png';
const icon3 = './img/jian.png';

export default class TabTitltImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    const CheckIcon = (data, isCommonApp) => {
      if (!this.props.isSelect) {
        return(<div />);
      }
      var icon = icon2;
      if (isCommonApp) {
        icon = icon3;
      } else {
        this.props.commonApps.forEach((val, index) => {
          if (val.name === data.name) {
            icon = icon1;
          }
        });
      }
      return (<img className="checkIcon" src={icon} alt="" hidden={!this.props.isSelect} />);
    }
    
    var className = "fixedApplicetionImage";
    if (this.props.isSelect) {
      className = "fixedApplicetionImageSelect";
    }

    return (
      <div className="TabTitltImage">
        <Row gutter={8} style={{ margin: '10px' }}>
            {this.props.listData.map((val, index) => (
              <Col key={index} className="gutter-row" span={6} onClick={this.props.onClickButton.bind(this, val, this.props.isCommonApp)}>
                <div className="fixedApplicetionItem">
                  <div>
                    <img className={className} src={val.img} alt="" />
                    {CheckIcon(val, this.props.isCommonApp)}
                  </div>
                  <p className="titleFont">{val.name}</p>
                </div>
              </Col>
            ))}
          </Row>
      </div>
    )
  }
}

TabTitltImage.propTypes= {
  listData: PropTypes.array,
  onClickButton: PropTypes.func,
  isSelect: PropTypes.bool,// 是否显示选中
  isCommonApp: PropTypes.bool,// 是否是常用应用
  commonApps: PropTypes.array,// 常用应用
}

TabTitltImage.defaultProps={
  isSelect: false,// 是否显示选中
  isCommonApp: false,// 是否是常用应用
}