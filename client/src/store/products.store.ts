import axios from "axios";
import { writable } from "svelte/store";
import type { Brand } from "./brand.store";
import type { Categories } from "./category.store";


const URL = 'http://localhost:8009/products/'

export type Products = {
    id:         number,
    name:       string,
    image:      FileList,
    description:string,
    brand:      Brand,
    category:   Categories,
    price:      number
}

export const productsStore = writable<Products[]>([])


export function fetchProducts() {
    axios.get(URL)
        .then(res => productsStore.set(res.data))
}

export function addProducts(name: string, image: FileList, description: string, brand: Brand, category: Categories, price: number ) {
    axios.post(URL, { name, image, description, brand, category, price  })
        .then(() => fetchProducts())
}

export function removeProducts(id: number) {
    axios.delete(URL + id)
        .then(() => fetchProducts())
}