import express from 'express' ;
import { getBlogs, getBlogBySearch , createBlogs, deleteBlog,updateBlog , likeBlog} from '../Controller/app.js'
import auth from '../MiddleWare/middleware.js';
const router = express.Router();

router.get('/search', getBlogBySearch)
router.get('/', getBlogs);
router.post('/',auth, createBlogs);
router.delete('/:id',auth, deleteBlog);
router.patch('/:id', auth, updateBlog)
router.patch('/:id/likeBlog', auth, likeBlog);
export default router;