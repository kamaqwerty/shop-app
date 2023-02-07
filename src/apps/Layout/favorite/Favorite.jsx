

import React, { useState } from 'react'
import { deleteFavorite, getFavorite } from '../../../api/api'
import Container from '../../../components/Container/Container'
import Loader from '../../../components/loader/Loader'
import ProductsCard from '../../../components/products/productsCard/ProductsCard'
import { Hooks } from '../../../hooks'
import {  toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import cls from "./Favorite.module.scss"

export default function Favorite() {

  const { product } = Hooks.useLayout();
  const [ favoriteProduct, setFavoriteProduct ] = useState(null);
  const { currentUser } = Hooks.useUser();
  const notify = () => toast("Products is deleted!");
  const [renderer, setRenderer] = React.useState("")

  React.useEffect(() => {
    const request = getFavorite();

    request
      .then(res => {
        setFavoriteProduct(res.data);
        setRenderer("recover!")
      })
  }, [renderer])

  const favorites = [];

  product?.forEach(element => {
    favoriteProduct?.forEach(item => {
      if(element.id === item.product) {
        favorites.push({
          ...element,
          deletedId: item.id
        })
      }
    });
  });

  const handleDeleteFavorite = (id) => {
    if(id) {
      const request = deleteFavorite(parseInt(id));
      setRenderer("Success recover!")

      request 
        .then(() => {
          notify();
          setRenderer("Success delete!")
        })
    }
  };

  return (
    <Container>
      <div className={cls.favorite_point}>
        <h2>My Favorites</h2>

        <div className={cls.favorite_inline}>
          {(favorites?.length === 0 && currentUser) && <p>You dont have favorite products!</p>}

          {currentUser === undefined && <p>You are not authorized!</p>}

          {!favoriteProduct && <Loader/>}

          {favorites?.map(item => 
            <ProductsCard 
              handleDelete={handleDeleteFavorite}
              isFavorite={true}
              key={item.id} 
              base={item}
            />
          )}
        </div>
      </div>
    </Container>
  )
}
