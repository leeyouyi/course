import { useState } from "react";
import Input from "../components/Inpit";
import Select from "../components/Select";

const SelectData = [
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
];
// 欄位name
const EnumMaster = {
  inputValue: "inputValue",
  selectValue: "selectValue",
};
// 預設值
const initMaster = {
  [EnumMaster.inputValue]: "",
  [EnumMaster.selectValue]: "",
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
  // select change
  // const handleSelectChange = (e) => {
  //   // console.log(e.target.value);
  //   setSelectValue(e.target.value);
  // };
  //全部欄位change
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
        name={EnumMaster.inputValue}
        value={master[EnumMaster.inputValue]}
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
        required
      />
      {/* <input
        type="text"
        name={EnumMaster.inputValue}
        value={master[EnumMaster.inputValue]}
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
        required
      /> */}
      <br />

      <Select
        style={{ width: "170px", marginBottom: "10px" }}
        name={EnumMaster.selectValue}
        value={master[EnumMaster.selectValue]}
        onChange={handleChange}
        required
        data={SelectData}
      />
      {/* <select
        style={{ width: "170px" }}
        name={EnumMaster.selectValue}
        value={master[EnumMaster.selectValue]}
        onChange={handleChange}
        required
      >
        {SelectData.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select> */}

      <div>
        <button>submit</button>
      </div>
    </form>
  );
};

export default Lesson5;
