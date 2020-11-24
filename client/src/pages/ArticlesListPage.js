import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import Header from '../Header';
import Background from '../img/articles-bg.jpg'

const ArticlesListPage = () => (
    <>
    <Header heading={"Articles"} subheading={"A list of great articles about Python"} image={Background}/>
    <div id="page-body">
        {/* <h1 className="mb-4">Articles</h1> */}
        <ArticlesList articles={articleContent} />
    </div>

    </>
);

export default ArticlesListPage;