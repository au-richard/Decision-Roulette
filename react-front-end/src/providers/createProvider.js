import axios from "axios";
import { useState, createContext, useEffect } from "react";

// Create a Context
export const categoryContext = createContext();

// Create a Component wrapper from Context.Provider
export default function CreateProvider(props) {
  // Here is our Shared State Object
  const [create, setCreate] = useState("");
  const [myinput, setMyInput] = useState("");

  const createNew = function (createCategory, createInput) {
    setCreate([{ createCategory, createInput }]);
  };

  console.log("fetching");
  console.log("option:", createNew);

  // const inputName = data.myinput[0]
  // const inputOne = data.myinput[1]
  // const inputTwo = data.myinput[2]
  // const inputThree = data.myinput[3]
  // const inputFour = data.myinput[4]
  // const inputFive = data.myinput[5]
  // const inputSix = data.myinput[6]

  // setMyInput([inputName, inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix])

  const createValue = {
    data: create,
    createResults: (value) => {
      createNew(value);
    },
    myinput,
    setMyInput,
  };

  return (
    <categoryContext.Provider value={createValue}>
      {props.children}
    </categoryContext.Provider>
  );
}
