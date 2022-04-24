import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import createProvider, { categoryContext } from "../providers/createProvider";

const CreateCategory = props => {

  const ctx = useContext(categoryContext)
  const [one, setOne] = useState("")
  const [two, setTwo] = useState("")
  const [three, setThree] = useState("")
  const [four, setFour] = useState("")
  const [five, setFive] = useState("")
  const [six, setSix] = useState("")
  const [seven, setSeven] = useState("")

  const [myinput, setMyInput] = useState("")
  // const [state, setState] = useState({
  //  categoryName: "",
  //   categoryInput: "",
  //   categoryInput2: "",
  //   categoryInput3: ""
  // });

  console.log("ctx", ctx)

  const inputFunction = function () {
  ctx.setMyInput([one, two, three, four, five, six, seven])
  }

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   // setState(prevState => ({
  //   //   ...prevState,
  //   //   [name]: value
  //   // }));
  // };
  
  // console.log("Value", value)
  
  return (
    // <>
    <div className="other_pages">
      <h1>Create Category:</h1>
      <div className="new_category">
      <form>
        <p>
        <input
        type="text"
        placeholder="Category Name"
        name="categoryName"
        // onChange={handleInputChange}
        value={seven}
        onChange={(event) => setSeven(event.target.value)}
        />
        </p>
      </form>
        </div>

          <form>
        <p>
          <input
            type="text"
            placeholder="Input +"
            name="categoryInput"
            // onChange={handleInputChange}
            value={one}
            onChange={(event) => setOne(event.target.value)}
            />
          </p>
          </form>
        <form>
        <p>
          <input
            type="text"
            placeholder="Input +"
            name="categoryInput2"
            // onChange={handleInputChange}
            value={two}
            onChange={(event) => setTwo(event.target.value)}
            />
          </p>
          </form> 
          
          <form>
          <p>
          <input
          type="text"
          placeholder="Input +"
          name="categoryInput3"
          // onChange={handleInputChange}
          value={three}
          onChange={(event) => setThree(event.target.value)}
          />
          </p>
          </form>
          <form>
          <p>
          <input
          type="text"
          placeholder="Input +"
          name="categoryInput3"
          // onChange={handleInputChange}
          value={four}
          onChange={(event) => setFour(event.target.value)}
          />
          </p>
          </form>
          <form>
          <p>
          <input
          type="text"
          placeholder="Input +"
          name="categoryInput3"
          // onChange={handleInputChange}
          value={five}
          onChange={(event) => setFive(event.target.value)}
          />
          </p>
          </form>
          <form>
          <p>
          <input
          type="text"
          placeholder="Input +"
          name="categoryInput3"
          // onChange={handleInputChange}
          value={six}
          onChange={(event) => setSix(event.target.value)}
          />
          </p>
          </form>

        <Link
          className="save_button"
          to={{
            pathname: "/savedcategory",
            // state
          }}
          onClick={() => {inputFunction()}}
          >
          SAVE
        </Link>
    </div>
    // {/* </> */}
    );
  };
  

  export default CreateCategory;
