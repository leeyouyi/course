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
  /** input change handler */
  const handleInputChange = (e) => {
    // console.log("inputValue", e.target.value);
    setInputValue(e.target.value);
  };
  /** form submit handler */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputValue", inputValue);
    console.log("selectValue", selectValue);
    console.log("selectLabel", selectLabel);
  };

  const handleSelectChange = (e) => {
    // console.log("selectValue", e.target.value);
    setSelectValue(e.target.value);
    setSelectLabel(e.target.options[e.target.selectedIndex].text);
    // console.log("selectLabel", e.target.options[e.target.selectedIndex].text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input value={inputValue} onChange={handleInputChange} required />

      <Select
        value={selectValue}
        onChange={handleSelectChange}
        required
        data={selectData}
      />

      <button type="submit">submit</button>
    </form>
  );
};

export default Lesson5;
