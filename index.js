const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('blog');
})

let arrayBlog = [];

app.post('/blog/add', upload.none(), (req, res) => {
    let blog = {
        title: req.body.title,
        contents: req.body.contents
    }
    console.log(blog);
    arrayBlog.push(blog);
    res.redirect(301, '/list');
})

app.get('/list', (req, res) => {
    res.render('view', {Blogs: arrayBlog});
})

app.listen(port, () => {
    console.log(`Running ${port}`);
})

