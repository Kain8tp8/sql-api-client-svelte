import express from "express"
import cors from 'cors'
import brandRoutes from "./routes/brand.routes"
import categoryRoutes from "./routes/category.routes"
import productsRoutes from "./routes/products.routes"
import userRoutes from "./routes/user.routes"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/brands', brandRoutes)
app.use('/categories', categoryRoutes)
app.use('/products', productsRoutes)
app.use('/users', userRoutes)

app.listen(8009, () => {
  console.log('Server is running on http://localhost:8009');
})
