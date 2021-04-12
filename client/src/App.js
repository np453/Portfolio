import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//scss file
import "./sass/main.scss";

//component
import Homepage from './views/home';
import Dashboard from './components/admin/dashboard';
import Blog from './components/blog';
import Editor from './components/editor';
import Login from './components/admin/login';
import Register from './components/admin/register';
import Blogdashboard from './components/admin/blogdashboard';

//This component helps in scrolling to top, when a new page loads
import ScrollToTop from './common/ScrollToTop';





function App() {
  const loader = document.querySelector(".preloader");

  const showLoader = () => loader.classList.remove("preloader");
  const addClass = () => loader.classList.add("loader-hide");
    useEffect(() => {
      showLoader();
      addClass();
    }, []);
  return (
    <div>
       <Router>
        {/* <ScrollToTop> */}
        <switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/blog" exact component={Blog} /> 
          <Route path="/editor" exact component={Editor} />
          <Route path="/dashboard" exact component={Dashboard} /> 
          <Route path="/blog_dashboard" exact component={Blogdashboard} /> 
          <Route path="/admin_login" exact component={Login} /> 
          {/* <Route path="/admin_register" exact component={Register} />  */}

        </switch>
        {/* </ScrollToTop> */}
      </Router>
    </div>
  );
}

export default App;

