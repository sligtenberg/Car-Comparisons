import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

function Comments() {
    const [comments, setComments] = useState([])

    // populate comments from server
    useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then(r => r.json())
        .then(setComments)
    }, [])

    // called when a new comment is submitted
    // adds the comment to the server
    // adds the comment to the DOM without a refresh
    function submitNewComment(event) {
        event.preventDefault()
        const newComment = {id: comments.length + 1 ,text: event.target[0].value}

        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newComment)
        })
        .then(r => r.json())
        .then(setComments([...comments, newComment]))
    }

    // delete a comment form the server and DOM
    function handleCommentDelete(commentToDeleteId) {
        fetch(`http://localhost:3000/comments/${commentToDeleteId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(setComments(comments.filter(comment => comment.id === commentToDeleteId ? false : true)))
    }

    // comment components
    const commentCards = comments.map(comment => <CommentCard key={comment.id} comment={comment} handleCommentDelete={handleCommentDelete}/>)

    return (
        <div>
            <form id="new-comment-form" onSubmit={submitNewComment}>
                <h3>Leave a comment or suggestion for my app!</h3>
                <textarea></textarea><br></br>
                <button>Submit comment</button>
            </form>
            <h2>Comments</h2>
            {commentCards}
        </div>
    )
}

export default Comments;
