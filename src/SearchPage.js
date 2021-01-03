import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays. 26 august to 30 august . guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Nearby</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms And Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2ms5h1iEBQ64D5CRcFxyJWxJSfy9JNp6t5A&usqp=CAU"
        location="Private Room in center of London"
        title="This is  Special Espacios House"
        description="1 Geust, 1 Bedroom,1.5 shared,Wifi and Kitchen, Free Parking,Washing Machine"
        star={4.5}
        price="$55"
        total="$134 Total"
      />
      <SearchResult
        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/minimalist-eclectic-living-room-1554401627.jpg"
        location="Private Room in center of London"
        title="This is  Special Espacios House"
        description="1 Geust, 1 Bedroom,1.5 shared,Wifi and Kitchen, Free Parking,Washing Machine"
        star={4.8}
        price="$85"
        total="$134 Total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc66KnXHM6jfy3wkUBP2MS1qKZ8rLywAG3hw&usqp=CAU"
        location="Private Room in center of London"
        title="This is  Special Espacios House"
        description="1 Geust, 1 Bedroom,1.5 shared,Wifi and Kitchen, Free Parking,Washing Machine"
        star={4.3}
        price="$49"
        total="$134 Total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBrng9IV1oJh9abB09pt7jK_qaqQTg_a8dgw&usqp=CAU"
        location="Private Room in center of London"
        title="This is  Special Espacios House"
        description="1 Geust, 1 Bedroom,1.5 shared,Wifi and Kitchen, Free Parking,Washing Machine"
        star={4}
        price="$68"
        total="$134 Total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAPXy29mNMW9C29N9u1RNvzq0fO8Z_WFgqNA&usqp=CAU"
        location="Private Room in center of London"
        title="This is  Special Espacios House"
        description="1 Geust, 1 Bedroom,1.5 shared,Wifi and Kitchen, Free Parking,Washing Machine"
        star={4.7}
        price="$78"
        total="$134 Total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsKT8QWTa2Uh8ldC_D2em-mRaqJGg0G2vDiQ&usqp=CAU"
        location="Private Room in center of London"
        title="This is  Special Espacios House"
        description="1 Geust, 1 Bedroom,1.5 shared,Wifi and Kitchen, Free Parking,Washing Machine"
        star={4.2}
        price="$48"
        total="$134 Total"
      />
    </div>
  );
}

export default SearchPage;
