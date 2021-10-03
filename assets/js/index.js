/**
 * @typedef Post
 * @property {number} id
 * @property {string} img
 * @property {Date} createdAt
 * @property {number} likes
 * @property {string} author
 * @property {string} description
 * @property {number} comments
 * @property {string} time
 */

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
 * @param {Post} post
 */
const addPost = (post) => {
  const card = document.createElement("main");
  card.classList.add("card", "post");

  const image = document.createElement("img");
  image.src = post.img;
  card.appendChild(image);

  const body = document.createElement("section");
  body.classList.add("card-body", "post-body");

  const timeLikesRow = createTimeLikesRow(post);
  const authorRow = createAuthorRow(post);
  const textRow = createTextRow(post);
  const commentsRow = createCommentsRow(post);

  body.appendChild(timeLikesRow);
  body.appendChild(authorRow);
  body.appendChild(textRow);
  body.appendChild(commentsRow);

  card.append(body);

  const article = document.createElement("article");
  article.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");
  article.appendChild(card);

  const row = document.getElementById("posts-list");
  row.appendChild(article);
};

/**
 * @param {number} id
 */
const onLikesClick = (id) => {
  const post = posts.find(post => post.id === id);
  if (!post) {
    return;
  }
  post.likes++;
  const idString = `post-${id}-likes`;
  const likesSpan = document.getElementById(idString);
  likesSpan.innerText = `${post.likes}k`;
};

/**
 * @param {Post} post
 */
const createTimeLikesRow = (post) => {
  const timeLikesRow = document.createElement("section");
  timeLikesRow.classList.add("row");

  const timeCol = document.createElement("article");
  timeCol.classList.add("col-6", "post-time");
  const time = document.createElement("span");
  time.innerText = post.time;
  timeCol.appendChild(time);

  const likesCol = document.createElement("article");
  likesCol.classList.add("col-6", "post-likes");
  const likesBtn = document.createElement("button");
  likesBtn.classList.add("btn", "btn-danger");
  likesBtn.addEventListener("click", () => onLikesClick(post.id));
  const likesSpan = document.createElement("span");
  const likesIcon = document.createElement("i");
  likesIcon.classList.add("fas", "fa-heart");
  likesSpan.appendChild(likesIcon);
  const likes = document.createElement("span");
  likes.id = `post-${post.id}-likes`;
  likes.innerText = `${post.likes}k`;
  likesSpan.appendChild(likes);
  likesBtn.appendChild(likesSpan);
  likesCol.appendChild(likesBtn);

  timeLikesRow.appendChild(timeCol);
  timeLikesRow.appendChild(likesCol);

  return timeLikesRow;
};

/**
 * @param {Post} post
 */
const createAuthorRow = (post) => {
  const authorRow = document.createElement("section");
  authorRow.classList.add("row", "post-author");

  const authorSpan = document.createElement("span");
  authorSpan.innerText = post.author;
  
  authorRow.appendChild(authorSpan);

  return authorRow;
};

/**
 * @param {Post} post
 */
const createTextRow = (post) => {
  const textRow = document.createElement("section");
  textRow.classList.add("row", "post-text");

  const text = document.createElement("p");
  text.classList.add("card-text");
  text.innerText = post.description;

  textRow.appendChild(text);

  return textRow;
};

/**
 * @param {Post} post
 */
 const createCommentsRow = (post) => {
  const commentsRow = document.createElement("section");
  commentsRow.classList.add("row", "post-comments");

  const span = document.createElement("span");
  const icon = document.createElement("i");
  icon.classList.add("far", "fa-comment-alt");
  span.appendChild(icon);
  const comments = document.createElement("span");
  comments.innerText = `${post.comments} comments`;
  span.appendChild(comments);

  commentsRow.appendChild(span);

  return commentsRow;
};

posts.forEach(post => {
  addPost(post);
});

const modal = new bootstrap.Modal(document.getElementById("post-modal"), {});
const addPostBtn = document.getElementById("btn-add-post");
addPostBtn.addEventListener("click", () => {
  const lastPost = posts[posts.length - 1];
  const descriptionElement = document.getElementById("description");
  const description = descriptionElement.value;
  const imageInputElement = document.getElementById("formFile");
  const url = URL.createObjectURL(imageInputElement.files[0]);
  const post = {
    id: lastPost.id + 1,
    author: "@edison",
    img: url,
    time: "now",
    likes: 0,
    description,
    comments: 0,
  };
  posts.push(post);
  addPost(post);
  modal.hide();
});