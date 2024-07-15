import { useState } from "react";
import Input from "../components/Input";
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
  {
    value: "3",
    text: "option3",
  },
];

const enumMaster = {
  inputValue: "inputValue",
  selectValue: "selectValue",
  selectText: "selectText",
};

const initMaster = {
  [enumMaster.inputValue]: "",
  [enumMaster.selectValue]: "",
  [enumMaster.selectText]: "",
};

const Lesson5 = () => {
  // const [inputValue, setInputValue] = useState("");
  // const [selectValue, setSelectValue] = useState("");
  const [master, setMaster] = useState(initMaster);
  /** input change */
  // const handleInputChange = (e) => {
  //   // console.log(e.target.value);
  //   setInputValue(e.target.value);
  // };

  /** select Change */
  // const handleSelectChange = (e) => {
  //   console.log(e.target.value);
  // setSelectValue(e.target.value);
  // };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === enumMaster.selectValue) {
      const index = e.nativeEvent.target.selectedIndex;
      const text = e.nativeEvent.target[index].text;
      setMaster((prev) => ({
        ...prev,
        [name]: value,
        [enumMaster.selectText]: text,
      }));
    }
    setMaster((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  /** form submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(master);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        style={{ marginBottom: "10px" }}
        name={enumMaster.inputValue}
        value={master[enumMaster.inputValue]}
        onChange={handleChange}
        required
      />
      {/* <input
        type="texy"
        name={enumMaster.inputValue}
        value={master[enumMaster.inputValue]}
        onChange={handleChange}
        required
      /> */}
      <br />
      <Select
        style={{ marginBottom: "10px" }}
        name={enumMaster.selectValue}
        value={master[enumMaster.selectValue]}
        onChange={handleChange}
        required
        data={SelectData}
      />
      {/* <select
        style={{ width: "180px" }}
        name={enumMaster.selectValue}
        value={master[enumMaster.selectValue]}
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
