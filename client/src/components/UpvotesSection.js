import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/posts/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
        <div className="mt-5 mb-3" id="upvotes-section">
            <button onClick={() => upvoteArticle()} className="btn btn-danger btn-lg">
                <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> Like
            </button>
            <p>The post recieved {upvotes} likes</p>
        </div>
    );
}

export default UpvotesSection;