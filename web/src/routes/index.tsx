import React from 'react';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherForm from '../pages/TeacherForm';
import TeacherList from '../pages/TeacherList';
import Error404 from '../pages/Error404';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/teacher/form" component={TeacherForm}/>
                <Route path="/study" component={TeacherList}/>
                <Route component={Error404}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;