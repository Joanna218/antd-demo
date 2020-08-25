import React from 'react';
// import { Button } from 'antd';
import './App.css';
import UcSelect from './ucComponent/UcSelect';

import { Select } from 'antd';

const { Option } = Select;

const selectData = [
  { text: "aaa", value: "111" },
  { text: "bbb", value: "222" },
  { text: "ccc", value: "333"},
];
const selectData2 = [
  { text: "aaa", value: "111" },
  { text: "bbb", value: "222" },
  { text: "ccc", value: "333"},
];
const selectDefaultValue = { text: "ccc", value: "333" };

function handleChange(value){
  console.log(`selected ${value}`);
}

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function App() {
  return (
    <div className="App">
      {/* <Button type="primary">Button</Button> */}
      <UcSelect ucData={selectData} ucDefaultValue={selectDefaultValue} ucPlaceholder={"請選擇..."}/>
      <UcSelect ucData={selectData2} ucDefaultValue={selectDefaultValue} ucReadOnly={false}
      />

      <UcSelect ucData={selectData} ucDefaultValue={selectDefaultValue}
        ucIsMultiselect={true} style={{ width: '100%' }} onChange={handleChange}
        tokenSeparators={[',']} />
    </div>
  );
}

export default App;
