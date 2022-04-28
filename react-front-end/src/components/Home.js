import React, { useContext, useState, useEffect } from "react";
import Wheel from "./Wheel";
import { searchContext } from "../providers/SearchProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import Spinner from 'react-bootstrap/Spinner'


function Home() {
  const ctx = useContext(searchContext);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleIsLoadedToggle = () => {
    setLoading(currentIsLoaded => !currentIsLoaded)
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [loading]);

  return (
    <>
      <div className="guide">
        <p><font color="azure"></font><font color="purple">Can't make a decision? Enter a category and let fate decide for you...</font></p>
      </div>
      <div className="category">
        <form className='category_form' method='get' action='/' onSubmit={event => event.preventDefault()}>
          <input
            type="text"
            id="form"
            placeholder='Enter Category'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>
        <div className="icon">
          <button className="icon_button" onClick={() => { ctx.fetchResults(query); handleIsLoadedToggle() }}>
            <FontAwesomeIcon icon={faForward} />
          </button>
          {loading && <Spinner animation="border" variant="light" />}
        </div>
      </div>
      <Wheel />
    </>
  );
}


export default Home;
