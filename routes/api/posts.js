var express = require('express');
var router = express.Router();
var postsCtrl =require('../../controllers/api/posts');

router.get('/api/posts/', postsCtrl.index);
router.get('/api/posts/:id', postsCtrl.show);
router.post('/api/posts/', postsCtrl.create);
router.delete('/api/posts/:id', postsCtrl.delete);
router.put('/api/posts/:id', postsCtrl.update);

module.exports = router;