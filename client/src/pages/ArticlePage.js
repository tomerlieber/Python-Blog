import React, { useState, useEffect } from 'react'; // Maybe I can remove React here
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import Header from '../Header';
import Background from '../img/posts.jpg'

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            const result = await fetch(`/api/posts/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />
    
    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
        <Header heading={article.title} image={Background}/>
        <div id="page-body">
            <article.content/>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h2 className="mt-5 mb-3"><u>Other Articles:</u></h2>
            <ArticlesList articles={otherArticles} />
        </div>
        </>
    );
}

export default ArticlePage;