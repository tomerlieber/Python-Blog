import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/posts/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.introduction}</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;