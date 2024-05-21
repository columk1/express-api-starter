import { Router } from 'express'
import { getMany, getOne, createOne, updateOne, deleteOne } from './controller.js'

const router = Router()

router.route('/').get(getMany).post(createOne)

router.route('/:id').get(getOne).put(updateOne).delete(deleteOne)

export default router
