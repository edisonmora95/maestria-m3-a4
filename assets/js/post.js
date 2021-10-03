/**
 * @typedef PostData
 * @property {number} id
 * @property {string} img
 * @property {Date} createdAt
 * @property {number} likes
 * @property {string} author
 * @property {string} description
 * @property {number} comments
 * @property {string} time
 */

class Post {
    /**
     * @param {PostData} data
     * @param {Function} onLikesClick
     */
    constructor(data, onLikesClick) {
        this._data = data;
        this._onLikesClick = onLikesClick;
    }

    add() {
        const card = document.createElement("main");
        card.classList.add("card", "post");

        const image = document.createElement("img");
        image.src = this._data.img;
        card.appendChild(image);

        const body = document.createElement("section");
        body.classList.add("card-body", "post-body");

        const timeLikesRow = this._createTimeLikesRow();
        const authorRow = this._createAuthorRow();
        const textRow = this._createTextRow();
        const commentsRow = this._createCommentsRow();

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
    }

    addLike() {
        this._data.likes++;
        const idString = `post-${this._data.id}-likes`;
        const likesSpan = document.getElementById(idString);
        likesSpan.innerText = `${this._data.likes}k`;
    }

    _createTimeLikesRow() {
        const timeLikesRow = document.createElement("section");
        timeLikesRow.classList.add("row");

        const timeCol = this._createTimeCol();

        const likesCol = this._createLikesCol();

        timeLikesRow.appendChild(timeCol);
        timeLikesRow.appendChild(likesCol);

        return timeLikesRow;
    }

    _createTimeCol() {
        const timeCol = document.createElement("article");
        timeCol.classList.add("col-6", "post-time");
        const time = document.createElement("span");
        time.innerText = this._data.time;
        timeCol.appendChild(time);
        return timeCol;
    }

    _createLikesCol() {
        const likesCol = document.createElement("article");
        likesCol.classList.add("col-6", "post-likes");

        const likesBtn = document.createElement("button");
        likesBtn.classList.add("btn", "btn-danger");
        likesBtn.addEventListener("click", () => this._onLikesClick(this._data.id));

        const likesSpan = document.createElement("span");
        const likesIcon = document.createElement("i");
        likesIcon.classList.add("fas", "fa-heart");
        likesSpan.appendChild(likesIcon);
        const likes = document.createElement("span");
        likes.id = `post-${this._data.id}-likes`;
        likes.innerText = `${this._data.likes}k`;

        likesSpan.appendChild(likes);
        likesBtn.appendChild(likesSpan);
        likesCol.appendChild(likesBtn);

        return likesCol;
    }

    _createAuthorRow() {
        const authorRow = document.createElement("section");
        authorRow.classList.add("row", "post-author");

        const authorSpan = document.createElement("span");
        authorSpan.innerText = this._data.author;

        authorRow.appendChild(authorSpan);

        return authorRow;
    }

    _createTextRow() {
        const textRow = document.createElement("section");
        textRow.classList.add("row", "post-text");

        const text = document.createElement("p");
        text.classList.add("card-text");
        text.innerText = this._data.description;

        textRow.appendChild(text);

        return textRow;
    }

    _createCommentsRow() {
        const commentsRow = document.createElement("section");
        commentsRow.classList.add("row", "post-comments");

        const span = document.createElement("span");
        const icon = document.createElement("i");
        icon.classList.add("far", "fa-comment-alt");
        span.appendChild(icon);
        const comments = document.createElement("span");
        comments.innerText = `${this._data.comments} comments`;
        span.appendChild(comments);

        commentsRow.appendChild(span);

        return commentsRow;
    }
}
