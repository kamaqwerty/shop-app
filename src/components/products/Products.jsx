

import React from 'react'
import { Hooks } from '../../hooks';
import Loader from '../loader/Loader';
import cls from "./Products.module.scss"
import ProductsCard from './productsCard/ProductsCard'

export default function Products() {

  const { product } =  Hooks.useLayout(); 

  return (
    <div className={cls.products_inline}>
      {product?.length === 0 && <p>Empty</p>}

      {!product && <Loader/>}

      {product?.map(item => 
        <ProductsCard 
          isFavorite={false}
          key={item.id} 
          base={item}
        />
      )}
    </div>
  )
}
