const router = require('express').Router();

router.get('/', (req,res) => {
    res.json({posts: {title: 'this is a test title', 
    description: 'this is a test description'}})
})

module.exports = router;