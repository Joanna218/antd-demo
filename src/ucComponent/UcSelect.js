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
        onChange={this.handleChange}>
        {options}
     </Select>
    );
  }
}

export default UcSelect;