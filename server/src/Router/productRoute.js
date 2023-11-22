import { Router } from 'express'
import categoryController from '../controller/product/categoryController.js'
import brandController from '../controller/product/brandController.js'
import productController from '../controller/product/productController.js'
const router = Router()

router.post('/system/CandUCategory', categoryController.createCategory)
router.post('/system/CandUListCategory', categoryController.createItemListCat)
router.post(
  '/system/CandUItemsCategory',
  categoryController.createOrUpdateItemCategory
)

router.get('/system/getAllCategory', categoryController.getAllcategory)

// CRUD BRAND

router.post('/system/createOrupdateBrand', brandController.createOrUpdate)

// CRUD PRODUCT

router.post('/system/createProduct', productController.createProduct)

export default router
