import { Router } from 'express';
import req from '../public/request'

var router = Router();
const Result = req
/* GET home page. */
router.route('/')
  .get((req, res) => {
    res.send(Result)
  })

export default router;
