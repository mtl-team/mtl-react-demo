import React from "react";
import {List, Avatar, Icon} from 'antd';
import PropTypes from 'prop-types';

import "./ListTitleImage.css";

export default class ListTitleImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    const ListCell = (e) => {
      var headerHidden = true;
      var dataSource = e;
      if (!Array.isArray(e)) {
        headerHidden = false;
        dataSource = e.cells;
      }
      return (
        <div className="listSection">
          {
            headerHidden ? (<div />) : (
              <div className="listHeader" >
              {e.title}
            </div>
            )
          }
          <List 
            itemLayout='horizontal' dataSource={dataSource} renderItem={item => (
              <List.Item onClick={this.props.onClickButton.bind(this, item)}>
                <List.Item.Meta
                  avatar={<Avatar src={item.img} style={{marginLeft:'10px', width:'20px', height:'20px'}} />}
                  title={item.name}
                />
                <Icon type="right" style={{marginRight:'10px'}}/>
              </List.Item>
          )} />
        </div>
      );
    }
    return (
      <div className="ListTitleImage">
        {
          this.props.listData.map((val, index) => (
            <div key={index}>
              <div className="sectionTop" />
              {ListCell(val)}
            </div>
          ))
        }
      </div>
    )
  }
}

ListTitleImage.propTypes= {
  listData: PropTypes.array,
  onClickButton: PropTypes.func
}
