import { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";

const selectData = [
  {
    value: "",
    text: "",
  },
  {
    value: "1",
    text: "option1",
  },
  {
    value: "2",
    text: "option2",
  },
  {
    value: "3",
    text: "option3",
  },
];

//欄位名稱
const enumMaster = {
  inputValue: "inputValue",
  selectValue: "selectValue",
};
//初始值
const initMaster = {
  [enumMaster.inputValue]: "",
  [enumMaster.selectValue]: "",
};

const Lesson5 = () => {
  // const [inputValue, setInputValue] = useState("");
  // const [selectValue, setSelectValue] = useState("");
  const [master, setMaster] = useState(initMaster);

  // input change
  // const handleInputChange = (e) => {
  //   // console.log(e.target.value);
  //   setInputValue(e.target.value);
  // };
  // // select change
  // const handleSelectChange = (e) => {
  //   // console.log(e.target.value);
  //   setSelectValue(e.target.value);
  // };
  //共用onChange
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMaster((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(master);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name={enumMaster.inputValue}
        value={master[enumMaster.inputValue]}
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
        required
      />
      {/* <input
        type="text"
        name={enumMaster.inputValue}
        value={master[enumMaster.inputValue]}
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
        required
      /> */}
      <br />

      <Select
        style={{ width: "170px" }}
        name={enumMaster.selectValue}
        value={master[enumMaster.selectValue]}
        onChange={handleChange}
        required
        data={selectData}
      />
      {/* <select
        style={{ width: "170px" }}
        name={enumMaster.selectValue}
        value={master[enumMaster.selectValue]}
        onChange={handleChange}
        required
      >
        {selectData.map((item) => {
          return (
            <option key={"option" + item.value} value={item.value}>
              {item.text}
            </option>
          );
        })} */}
      {/* <option value=""></option>
        <option value="1">option1</option>
        <option value="2">option2</option> */}
      {/* </select> */}
      <br />
      <button>submit</button>
    </form>
  );
};

export default Lesson5;
