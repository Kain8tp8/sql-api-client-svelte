import Brand from "./brand.model"
import Category from "./category.model"

type Product = {
    id:         number,
    name:       string,
    image:      string,
    price:      number,
    brand:      Brand,
    category:   Category,
    description:string
}

export default  Product