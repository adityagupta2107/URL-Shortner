import expresse from 'express'

import {createShortUrl} from '../controler/shorturl.controller.js'

const router=expresse.Router();
router.post("/",createShortUrl)
export default router; 