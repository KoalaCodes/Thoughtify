const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
/*--------protected Routes ---*/
router.use(require('../../config/auth'));
router.get('/posts/:id', postsCtrl.show);
router.get('/posts', postsCtrl.index);
router.post('/posts', postsCtrl.create);
router.get('/posts/:id', postsCtrl.show);
router.post('/posts/:id', postsCtrl.update);
router.delete('/posts/:id', postsCtrl.delete);
// use checkAuth to Post or Routes
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}
module.exports = router;
