import express from 'express'
import { getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router()

router.get('/get', getPost)
router.post('/create', createPost)
router.patch('/update/:id', updatePost)
router.delete('/delete/:id', deletePost)
router.patch('/likePost/:id', likePost)

export default router