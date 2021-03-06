import React, { Component, lazy, Suspense } from 'react';
import {  Route, Switch } from "react-router-dom";

//import pages
const Home = lazy(()=> import("./Home"));

export default class CondeNast extends Component {
    render() {
        return (
            <div className="page-content">
                <Suspense fallback={<div>Loading..</div>}>
                    <Switch>
                        <Route path="/" render={(props)=><Home {...props} />} />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}