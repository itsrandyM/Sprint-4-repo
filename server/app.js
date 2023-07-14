const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://randall:Randy55awe@cluster0.4ceevrj.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
  });

  const BlogPost = mongoose.model('BlogPost', blogPostSchema);

 const bp= new BlogPost ({title :'Post 1', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
image: "https://p1.pxfuel.com/preview/933/927/598/wallpaper-gaming-game-play-technology-fun.jpg"})
 bp.save().then(() => console.log("Blog post saved"))

 app.get('/blog/posts', (req, res) => {
  BlogPost.find({})
    .then(BlogPosts => {
      res.status(200)
      .json(BlogPosts)
      console.log(BlogPosts)
    })
    .catch(error => {
      res.send(error)
    });
    
  });

    
  // Start the server
  const port =3000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })