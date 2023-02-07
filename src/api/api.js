import { instance } from "../configs/config";
import { requestPath } from "./request";


export const createUser = (data) => instance.post(requestPath.register, data);

export const authUser = (data) =>instance.post(requestPath.login, data);

export const getProducts = () => instance.get(requestPath.products);

export const addFavorite = (data) => instance.post(requestPath.favorite, data);

export const getFavorite = () => instance.get(requestPath.favorite);

export const deleteFavorite = (id) => instance.delete(requestPath.favoriteWithId(id));

export const addBasket = (data) => instance.post(requestPath.baskets, data);

export const getBaskets = () => instance.get(requestPath.baskets);

export const deleteBaskets = (id) => instance.delete(requestPath.basketsWithID(id))