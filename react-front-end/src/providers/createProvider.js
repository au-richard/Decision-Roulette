import { useState, createContext } from "react";

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
