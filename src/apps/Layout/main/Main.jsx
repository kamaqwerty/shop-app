


import React from 'react';
import Container from '../../../components/Container/Container';
import Products from '../../../components/products/Products';
import Slider from '../../../components/slider/Slider';

import cls from "./Main.module.scss";

export default function Main() {
  return (
    <React.Fragment>
      <Slider/>

      <Container>
        <div className={cls.main_products}>
          <h2>Our Products</h2>
          <Products/>
          <div className={cls.main_products_btn}>
            <button>More Products</button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
};
