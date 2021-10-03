const posts = [
  {
    id: 1,
    img: "https://i.pinimg.com/originals/07/d3/45/07d345396d4a96a46a1cacac42001635.jpg",
    time: "3 min ago",
    likes: 10,
    author: "@eric",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: 150,
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/07/d3/45/07d345396d4a96a46a1cacac42001635.jpg",
    time: "15 min ago",
    likes: 4,
    author: "@eric",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: 432,
  },
  {
    id: 3,
    img: "https://i.pinimg.com/originals/07/d3/45/07d345396d4a96a46a1cacac42001635.jpg",
    time: "25 min ago",
    likes: 43,
    author: "@eric",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: 432,
  },
  {
    id: 4,
    img: "https://i.pinimg.com/originals/07/d3/45/07d345396d4a96a46a1cacac42001635.jpg",
    time: "50 min ago",
    likes: 54,
    author: "@edison",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: 5454,
  },
  {
    id: 5,
    img: "https://i.pinimg.com/originals/07/d3/45/07d345396d4a96a46a1cacac42001635.jpg",
    time: "55 min ago",
    likes: 65,
    author: "@eric",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: 432,
  }
];

/**
 * @param {number} id
 */
const onLikesClick = (id) => {
  const postData = posts.find(post => post.id === id);
  if (!postData) {
    return;
  }
  const post = new Post(postData, onLikesClick);
  post.addLike();
};

posts.forEach(postData => {
  const post = new Post(postData, onLikesClick);
  post.add();
});

const modal = new bootstrap.Modal(document.getElementById("post-modal"), {});
const addPostBtn = document.getElementById("btn-add-post");
addPostBtn.addEventListener("click", () => {
  const lastPost = posts[posts.length - 1];
  const descriptionElement = document.getElementById("description");
  const description = descriptionElement.value;
  const imageInputElement = document.getElementById("formFile");
  const url = URL.createObjectURL(imageInputElement.files[0]);
  const postData = {
    id: lastPost.id + 1,
    author: "@edison",
    img: url,
    time: "now",
    likes: 0,
    description,
    comments: 0,
  };
  posts.push(postData);
  const post = new Post(postData, onLikesClick);
  post.add();
  modal.hide();
});