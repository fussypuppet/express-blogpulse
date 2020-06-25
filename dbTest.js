const db = require('./models');

db.comment.create({
    name: "Allen Paul",
    content: "This comment is 'neat'!",
    articleId: 1
})
.then(function(comment){
    console.log(comment.get());
})