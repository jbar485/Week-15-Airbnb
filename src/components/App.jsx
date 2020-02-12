import React from 'react';
import Header from './Header';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
import Stay from './Stay';
import SiteList from './SiteList';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={SiteList} />
        <Route exact path='/stay' component={Stay} />
      </Switch>

    </div>
  );
}

export default App;