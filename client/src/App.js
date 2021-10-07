import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import StreamList from "./components/StreamList";
import StreamEdit from "./components/StreamEdit";
import StreamCreate from "./components/StreamCreate";
import StreamDelete from "./components/StreamDelete";
import StreamShow from "./components/StreamShow";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";

const App = () => {
  const [userID, setUserID] = useState("");

  useEffect(() => {
    console.log(userID);
  }, [userID]);
  return (
    <Router>
      <Header setUserID={setUserID} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <StreamList userID={userID} />}
        />
        <Route exact path="/stream/new" component={StreamCreate} />
        <Route
          exact
          path="/stream/edit/:id"
          component={StreamEdit} />
        
        <Route exact path="/stream/delete/:id" component={StreamDelete} />
        <Route exact path="/stream/show/:id" component={StreamShow} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </Router>
  );
};

export default App;

