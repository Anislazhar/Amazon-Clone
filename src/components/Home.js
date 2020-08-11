import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://www.amazon.in/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/1X_AuCC_Music._CB428379140_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          title="OnePlus 8 5G (128GB Storage)"
          image="https://www.amazon.in/images/I/619iTNHSCGL._SL1500_.jpg"
          rating={2}
          price={419}
        />
        <Product
          id="2"
          title="Apple iPhone 11 Pro Max (64GB)"
          image="https://www.amazon.in/images/I/61ers6OzvUL._SL1024_.jpg"
          rating={5}
          price={899}
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="DELL XPS 9300 13.3-inchLaptop"
          image="https://www.amazon.in/images/I/61ieRrVEJXL._SL1000_.jpg"
          rating={3}
          price={1499}
        />

        <Product
          id="5"
          title="MacBook Pro (16-inch,Gen Intel Core i9)"
          image="https://www.amazon.in/images/I/71L2iBSyyOL._SL1500_.jpg"
          rating={5}
          price={2490}
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Dell Alienware M15 R2 15.6-inch FHD Laptop, Lunar Light"
          image="https://www.amazon.in/images/I/61FjdoHidqL._SL1000_.jpg"
          rating={3}
          price={622}
        />
      </div>
    </div>
  );
};

export default Home;
