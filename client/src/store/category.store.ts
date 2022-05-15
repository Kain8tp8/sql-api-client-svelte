import axios from "axios";
import { writable } from "svelte/store";


const URL = 'http://localhost:8009/categories/'

export type Categories = {
    id: number,
    name: string
}

export const categoryStore = writable<Categories[]>([])


export function fetchCategory() {
    axios.get(URL)
        .then(res => categoryStore.set(res.data))
}

export function addCategory(name: string) {
    axios.post(URL, { name })
        .then(() => fetchCategory())
}

export function removeCategory(id: number) {
    axios.delete(URL + id)
        .then(() => fetchCategory())
}