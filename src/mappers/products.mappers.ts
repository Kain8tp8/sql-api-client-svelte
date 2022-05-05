import Product from "../model/product.model"

export default function (body: any): Product {
  return {
    id: 0,
    name: body.name,
    image: body.image,
    brand: {
        id: body.brand.id,
        name: body.brand.name
    },
    category: {
        id:body.category.id,
        name:body.category.name
    },
    price: 12200
  }
}
