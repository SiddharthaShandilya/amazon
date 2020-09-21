import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        />

        <div className="home__row">
          {/*product */}
          <Product
            id={101}
            title="Amazon Basics"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" 
            rating={5}
          />
          <Product 
            id={102}
             title="Electronics"
             price={19.99}
             image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
             rating={3}
          />
        </div>
        <div className="home__row">
          {/*product */}
          <Product
          id={103}
            title="Fire TV Cube, hands-free with Alexa built in, 4K Ultra HD, streaming media player, released 2019"
            price={199.99}
            image="https://m.media-amazon.com/images/I/41fziVetM7L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4} 
          />
          <Product 
          id={104}
            title="AmazonBasics Home Keypad Safe - 1.2 Cubic Feet, 13 x 13 x 14.2 Inches, Black - 36SAM"
            price={19.99}
            image="https://m.media-amazon.com/images/I/A1vohfMPqRL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product 
          id={105}
            title="AmazonBasics Mechanics Socket Set, 145-Piece"
            price={19.99}
            image="https://m.media-amazon.com/images/I/91JV9n6r0LL._AC_UL480_QL65_.jpg"
            rating={3}
          />

          {/*product */}
        </div>
        <div className="home__row">
          {/*product */}
          <Product 
          id={106}
            title="Samsung QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV"
            price={497.99}
            image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
