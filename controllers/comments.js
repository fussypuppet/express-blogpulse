const express = require('express');
const db = require('../models');
const router = express.Router();

router.post('/', (req, res) => {
    db.comment.create({
        name: req.body.name,
        content: req.body.content,
        articleId: req.body.articleId
    })
    .then(createdComment => {
        console.log("💘💘💘💘💘💘💘💘💘💘💘 created comment");
        console.log(createdComment);
        res.redirect(`/articles/${req.body.articleId}`);
    })
    .catch(error => {
        console.log("🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨 error");
        console.log(error);
        res.status(400).render('main/404');
    })
})

module.exports = router;