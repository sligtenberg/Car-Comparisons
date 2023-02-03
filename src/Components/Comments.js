import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

function Comments() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/comments')
        .then(r => r.json())
        .then(setComments)
    }, [])

    const commentCards = comments.map(comment => <CommentCard key={comment.id} text={comment.text}/>)

    return (
        <div>
            {commentCards}
        </div>
    )
}

export default Comments