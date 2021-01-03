import React, { useState } from "react";
import "react-date-range/dist/theme/default.css"; // main Theme css file
import "react-date-range/dist/styles.css"; // main style file
import { DateRangePicker } from "react-date-range";
import "./Search.css";
import { People } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endtDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endtDate: endtDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      <h1>Search</h1>
      <DateRangePicker ranges={[selectionRange]} onchange={handleSelect} />
      <h2>
        Number Of Guests
        <People />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push("./search")}>Search Airbnb </Button>
    </div>
  );
}

export default Search;
