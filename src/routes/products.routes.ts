import { Router } from "express";
import productsMappers from "../mappers/products.mappers";
import productService from "../service/product.service";

const router = Router()

router.get('/', (req, res) => {

  productService.findAll()
    .then(products => res.json(products) )
    .catch(err => res.status(500).json({ message: 'Error while retriving categories', error: err }) )

})


// router.post('/', (req, res) => {
//   productService.create(productsMappers(req.body))
//     .then(() => res.sendStatus(200))
//     .catch(err => res.status(500).json({ message: 'Error while create products', error: err }) )
// })


router.delete('/:id', (req, res) => {
  productService.deleteOne(+req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while delete products', error: err }) )
})

router.put('/:id', (req, res) => {
  productService.updata(+req.params.id, productsMappers(req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while update products', error: err }))
})

export default router