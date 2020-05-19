import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import places from './page/places';
import Describe from './page/describe';
import HomePage from './page/homepage';
import Layout from './hoc/layout/layout.component';
import Info from './page/info/info';

const Routes = ()=>(
    <Layout>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/describe' component={Describe}/>
            <Route path='/info' component={Info}/>
            {/* {
                places.map(place =>(
                    <Route path={`/describe`} component={Describe}/>
                ))
            } */}
        </Switch>
    </Layout>
);

export default Routes ;