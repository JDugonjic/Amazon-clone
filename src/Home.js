import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="49538094"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239}
            image="https://images-na.ssl-images-amazon.com/images/I/61FJtVQh9bL._AC_SL1200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="90828732"
            title="Fitbit Sense Advanced Smartwatch with Tools for Heart Health"
            price={299}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vCIH5JZWL._AC_SL1500_.jpg"
          />
          <Product
            id="70826342"
            title="Echo Plus (2nd Gen) – Premium sound with a built-in smart home hub"
            price={69}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Nk6mmYFZL._AC_SL1000_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung CJ89 43 Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor"
            price={1094.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
