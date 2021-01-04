import { Button } from "@material-ui/core";
import { Mic, Search as SearchIcon } from "@material-ui/icons";
import React, { useState } from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function Search({ hideButtons }) {
  const [input, setInput] = useState("");
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_ACTION_TYPE,
      term: input,
    });
    // do something with input... come back and fix
    history.push("/search");
    setInput("");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Google or Type a URL"
        />
        <Mic />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type={"submit"} onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type={"submit"} onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
