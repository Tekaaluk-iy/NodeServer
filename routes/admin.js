const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin 以後 url');
});

router.get('/page1', (req, res) => {
    res.send('admin page1');
});

module.exports = router;