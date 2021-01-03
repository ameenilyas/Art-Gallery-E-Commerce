import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl_63Q3O9UKD3zg8YNVo0RGyWdFNZ4csCcYw&usqp=CAU"
          }
          title="Entire Homes"
          description="COmfortable private places,for friends and family"
        />
        <Card
          src="https://www.pinoyeplans.com/wp-content/uploads/2017/08/SHD-2017032-DESIGN2_View03a.jpg"
          title="Entire Homes"
          description="COmfortable private places,for friends and family"
        />
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXAX1n-dW81sM0wrnBemw8l9-Ub09q-9CAYA&usqp=CAU"
          }
          title="Entire Homes"
          description="COmfortable private places,for friends and family"
        />
      </div>
      <div className="home__section">
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl_63Q3O9UKD3zg8YNVo0RGyWdFNZ4csCcYw&usqp=CAU"
          }
          title="Entire Homes"
          description="COmfortable private places,for friends and family"
          price={"$130"}
        />
        <Card
          src="https://www.pinoyeplans.com/wp-content/uploads/2017/08/SHD-2017032-DESIGN2_View03a.jpg"
          title="Entire Homes"
          description="COmfortable private places,for friends and family"
          price={"$430"}
        />
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXAX1n-dW81sM0wrnBemw8l9-Ub09q-9CAYA&usqp=CAU"
          }
          title="Entire Homes"
          description="COmfortable private places,for friends and family"
          price={"$100"}
        />
      </div>
    </div>
  );
}

export default Home;
