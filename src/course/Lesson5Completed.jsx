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
    label: "react",
  },
  {
    value: "2",
    label: "select",
  },
  {
    value: "3",
    label: "jsx",
  },
  {
    value: "4",
    label: "mapSelect",
  },
];

const Lesson5 = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectLabel, setSelectLabel] = useState("");

  /** form submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputValue", inputValue);
    console.log("selectValue", typeof selectValue);
    console.log("selectLabel", selectLabel);
  };
  /** input value change */
  const handleInputChange = (e) => {
    // console.log("inputValue", e.target.value);
    setInputValue(e.target.value);
  };
  /** select value change */
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
    const index = e.nativeEvent.target.selectedIndex;
    setSelectLabel(e.nativeEvent.target[index].text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="請輸入文字"
        value={inputValue}
        onChange={handleInputChange}
        required
      />

      <Input
        value={inputValue}
        onChange={handleInputChange}
        required
        placeholder="請輸入文字"
      />

      {/* <select value={selectValue} onChange={handleSelectChange}>
        {selectData.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select> */}

      {/* <select>
        <option value="1">react</option>
        <option value="2">select</option>
        <option value="3">jsx</option>
      </select> */}

      <Select
        data={selectData}
        value={selectValue}
        onChange={handleSelectChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Lesson5;
