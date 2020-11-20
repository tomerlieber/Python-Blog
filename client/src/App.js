import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={ HomePage } exact />
            <Route path="/about" component={ AboutPage } />
            <Route path="/posts-list" component={ ArticlesListPage } />
            <Route path="/posts/:name" component={ ArticlePage } />
            <Route component={ NotFoundPage } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;