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

  console.log("ctx", ctx)

  const inputFunction = function () {
    ctx.setMyInput([one, two, three, four, five, six, seven])
  }

  return (
    <>
      <div className="other_pages">
        <h1>Create Cate<font color="#B5FFD9">g</font>ory:</h1>
        <div className="new_category">
          <form>
            <p>
              <input
                type="text"
                placeholder="Category Name +"
                value={seven}
                onChange={(event) => setSeven(event.target.value)}
              />
            </p>
          </form>
        </div>
        <div className="new_cat_input">
          <form>
            <p>
              <input
                type="text"
                placeholder="Input +"
                name="categoryInput"
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
                value={six}
                onChange={(event) => setSix(event.target.value)}
              />
            </p>
          </form>
        </div>
      </div>
      <Link
        className="save_button"
        to={{
          pathname: "/savedcategory",
        }}
        onClick={() => { inputFunction() }}
      >
        SAVE
      </Link>
    </>
  );
};

export default CreateCategory;
