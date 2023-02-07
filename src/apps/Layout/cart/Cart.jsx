

import React from 'react'
import { deleteBaskets, getBaskets } from '../../../api/api'
import Container from '../../../components/Container/Container'
import Loader from '../../../components/loader/Loader'
import Pagination from '../../../components/pagination/Pagination'
import ProductsCard from '../../../components/products/productsCard/ProductsCard'
import { Hooks } from '../../../hooks'
import {  toast } from "react-toastify"
import cls from "./Cart.module.scss"

export default function Cart() {

  const { currentUser } = Hooks.useUser();
  const [ basket, setBasket ] = React.useState([null]);
  const [currentCart, setCurrentCart] = React.useState(0);
  const [nextDisabled, setNextDisabled] = React.useState(false);
  const [prevDisabled, setPrevDisabled] = React.useState(false);
  const [ renderer , setRenderer ] = React.useState("");
  const notifyDeleteCart = (cartId) => toast(`Cart: ${cartId} is deleted!`);
  
  React.useEffect(() => {
    const request = getBaskets();

    request
      .then(res => {
        setBasket(res?.data);
        setRenderer("Recover");
      })
  }, [renderer])

  const cartProducts = basket?.map(item => item?.products_data);

  const nextCart = () => {
    if(currentCart !== basket?.length - 1) {
      setCurrentCart(prev => prev + 1)
    }else {
      setNextDisabled(true)
    }
  }

  const prevCart = () => {
    if(currentCart > 0) {
      setCurrentCart(prev => prev - 1)
    }else{
      setPrevDisabled(true)
    }
  };

  React.useEffect(() => {
    if(currentCart > 0) {
      setPrevDisabled(false)
    }
    if(currentCart !== basket?.length - 1) {
      setNextDisabled(false)
    }
  }, [basket, currentCart]);

  const  handleDeleteCartProduct = (id) => {
    setRenderer("Recover");
    if(id) {
      const request = deleteBaskets(parseInt(id))

      request
        .then(() => {
          notifyDeleteCart(id);
          setRenderer("Success Deleted!");
        })
    }
  }

  const total = basket[currentCart]?.total;

  const goods = cartProducts[currentCart];

  const cartId = basket[currentCart]?.id;

  return (
    <Container>
      <div  className={cls.cart_point}>
        <div className={cls.cart_point_header}>
          <section>
            <h2>My Cart</h2>

            {(goods !== undefined && goods?.length !== 0) && (
              <h3>
                Total summary: {
                  !total
                    ? "..."
                    : total + "$"
                }
              </h3>
            )}
          </section>
          {(goods !== undefined && goods?.length !== 0) && ( 
            <section>
              <button onClick={() => handleDeleteCartProduct(cartId)}>
                Delete cart:{cartId}
              </button>
            </section>
          )}
        </div>

        {(basket?.length === 0 && currentUser && goods === undefined) 
          && <p className={cls.cart_defined}>You dont have favorite products!</p>}

          {currentUser === undefined && <p>You are not authorized!</p>}

        <div className={cls.cart_inline}>

          {!basket && <Loader/>}

          {
            basket?.length !== 0
              ? (!goods && <Loader/>)
              : null
          }

          {goods?.map(item => 
            <ProductsCard 
              isCart={true}
              key={item.id} 
              base={item}
              handleDelete={handleDeleteCartProduct}
            />
          )}
        </div>
        {(goods !== undefined && goods?.length !== 0) && ( 
          <Pagination 
          handleNext={nextCart}
          handlePrev={prevCart}
          page={currentCart}
          nextDisabled={nextDisabled}
          prevDisabled={prevDisabled}
        />
        )}
        
      </div>  
    </Container>
  )
};
