import React from "react";

function CommentCard({ comment, handleCommentDelete }) {
    return (
        <div className="comment">
            {comment.text}
            <button id="delete-comment-btn" onClick={() => handleCommentDelete(comment.id)}>X</button>
        </div>
    )
}

export default CommentCard;
