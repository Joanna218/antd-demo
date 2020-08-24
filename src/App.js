import React from 'react';
// import { Button } from 'antd';
import './App.css';
import UcSelect from './ucComponent/UcSelect';

const selectData = [
  { text: "aaa", value: "111" },
  { text: "bbb", value: "222" },
  { text: "ccc", value: "333"},
];
const selectDefaultValue = { text: "ccc", value: "333" };

function App() {
  return (
    <div className="App">
      {/* <Button type="primary">Button</Button> */}
      <UcSelect ucData={selectData} ucDefaultValue={selectDefaultValue} ucPlaceholder={"請選擇..."}/>
    </div>
  );
}

export default App;
