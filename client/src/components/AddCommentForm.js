import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/posts/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }

    return (
        <>
            <div className="from-group mt-4">
                <label htmlFor="inputName">Name:</label>
                <input type="text" className="form-control" id="inputName" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="inputComment">Comment:</label>
                <textarea className="form-control" id="inputComment" rows="3" value={commentText} onChange={(event) => setCommentText(event.target.value)}></textarea>
            </div>
            <button className="btn btn-dark btn-lg mb-4" onClick={() => addComment()}>Add Comment</button>
        </>
    );
}

export default AddCommentForm;