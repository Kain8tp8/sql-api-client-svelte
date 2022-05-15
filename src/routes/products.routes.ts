import { Router } from 'express'
import { v4 as uuid } from 'uuid'
import multer from 'multer'
import productsMappers from '../mappers/products.mappers'
import productService from '../service/product.service'


const router = Router()

const storage = multer.diskStorage({
  destination:(_res,_file, cb) => cb(null, './upload'),
  filename: (_req, _file, cb) => { cb(null, uuid() + '.png') }
})

const upload = multer({ storage })

router.post('/', upload.single('poster'), (req, res)=>{

  if(!req.file){
    return res.sendStatus(400)
  }
   
  let product = productsMappers(req.body, req.file.filename)

  console.log(req.body);
  

  productService.addProducts(product)
    .then( () => res.sendStatus(200))
    .catch( () => res.sendStatus(500))
})







export default router
