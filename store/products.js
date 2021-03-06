import { writable } from "svelte/store";

const URL = "http://localhost:3000/items";

const getProducts = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("on pouvait pas retrouver les produits");
    const productsArr = await response.json();
    console.log(productsArr);
    products.set(productsArr); // I don't get this line. why do we have access to products
  } catch (error) {
    console.log(error.message);
  }
};

getProducts();

export const products = writable([]); // lorsque je le declare comme const pour la deposer d'ailleurs
console.log(products);

export const productsInCart = writable([]);

/**
 * retrouver les données d'un API pour utiliser chez le store se fait un peu differement.
 * mais j'y suis arrivé grâce à ce lien-ci:
 * https://stackoverflow.com/questions/64799008/make-ajax-request-from-store
 */
