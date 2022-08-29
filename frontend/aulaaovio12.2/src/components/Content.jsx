import React from 'react';
import { Route } from 'react-router-dom';

import Calendar from './pages/Calendar';
import Solution from './pages/Solution';
import LiveLectures from './pages/LiveLectures';
import Home from './pages/Home';
import TrybeTalks from './pages/TrybeTalks';
import SoluctionItems from './pages/SolutionItem';

class Content extends React.Component {
  render() {
    return (
      <main className="Content">
        <p>É o que vai mudar</p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/soluction" component={Solution} />
          <Route exact path="/live-lectures" component={LiveLectures} />
          <Route exact path="/trybe-talks" component={TrybeTalks} />
          <Route exact path="/soluction-items" component={SoluctionItems} />
        </Switch>
      </main>
    );
  }
}
export default Content;
