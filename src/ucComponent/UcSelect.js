/**
 * Select 下拉選單 單選、複選
 */

 /**
  * props 屬性
  * ucData: 資料來源
  * ucDefaultValue: 預設帶上的資料
  * ucPlaceholder:　提示字
  * ucReadOnly: 是否唯獨
  * ucIsMultiselect: 是否單選
  */
import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;

class UcSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    const props = this.props;
    const options = props.ucData.map(item => <Option key={item.value}>{item.text}</Option>);
    return (
      <Select placeholder={this.props.ucPlaceholder} style={{ width: 120 }}
        value={props.ucDefaultValue.value}
        disabled={props.ucReadOnly}
        onChange={this.handleChange}
        mode={'multiple'}>
        {options}
     </Select>
    );
  }
}

export default UcSelect;