import { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";

const selectData = [
  {
    value: "",
    label: "",
  },
  {
    value: "1",
    label: "option1",
  },
  {
    value: "2",
    label: "option2",
  },
  {
    value: "3",
    label: "option3",
  },
];
function Lesson5() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectText, setSelectText] = useState("");
  /** input onChange */
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  /** select onChange */
  const handleSelectChange = (e) => {
    // console.log(e.target.value);
    setSelectValue(e.target.value);
    const index = e.nativeEvent.target.selectedIndex;
    const text = e.nativeEvent.target[index].text;
    setSelectText(text);
    // console.log(text);
  };
  /** form submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    console.log(selectValue);
    console.log(selectText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "15px" }}>
        {/* <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        required
      /> */}
        <Input value={inputValue} onChange={handleInputChange} required />
      </div>
      <div style={{ marginBottom: "15px" }}>
        {/* 
      <select value={selectValue} onChange={handleSelectChange}>
        {selectData.map((el) => (
          <option key={el.value} value={el.value}>
            {el.label}
          </option>
        ))}
      </select> */}
        <Select
          value={selectValue}
          onChange={handleSelectChange}
          data={selectData}
          required
        />
      </div>

      <button>submit</button>
    </form>
  );
}

export default Lesson5;
