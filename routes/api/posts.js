var express = require('express');
var router = express.Router();
var postsCtrl =require('../../controllers/api/posts');

router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.show);
router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.delete);
router.put('/:id', postsCtrl.update);

module.exports = router;