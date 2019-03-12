import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Blog from '../Page/Blog';
import Olahraga from '../Page/Olahraga';
import Ekonomi from '../Page/Ekonomi';
import Politik from '../Page/Politik';
import Hiburan from '../Page/Hiburan';
import Home from '../Page/Home';
import Contact from '../Page/Contact';
import Gallery from '../Page/Gallery';
import SignIn from '../Page/SignIn';
import Profile from '../Page/Profile';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Gallery' component={Gallery} />
            <Route exact path='/News' component={Blog} />
            <Route exact path='/Olahraga' component={Olahraga} />
            <Route exact path='/Ekonomi' component={Ekonomi} />
            <Route exact path='/Politik' component={Politik} />
            <Route exact path='/Hiburan' component={Hiburan} />
            <Route exact path='/SignIn' component={SignIn} />
            <Route exact path='/Profile' component={Profile} />
            {/* <Route component={NotMatch} /> */}
        </Switch>
    );
};

export default MainRoute;