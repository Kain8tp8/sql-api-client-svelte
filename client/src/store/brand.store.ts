import axios from "axios";
import { writable } from "svelte/store";


const URL = 'http://localhost:8009/brands/'

export type Brand = {
    id: number,
    name: string
}

export const brandStore = writable<Brand[]>([])


export function fetchBrands() {
    axios.get(URL)
        .then(res => brandStore.set(res.data))
}

export function addBrand(name: string) {
    axios.post(URL, { name })
        .then(() => fetchBrands())
}

export function removeBrand(id: number) {
    axios.delete(URL + id)
        .then(() => fetchBrands())
}