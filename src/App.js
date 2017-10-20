import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import RankPlot from "./RankPlot";
import ClimateDashboard from "./ClimateDashboard";
import LineBrush from "./LineBrush";
import NetworkDiagrams from "./NetworkDiagrams";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ width: "100%", height: "100%" }}>
          <header>
            <Link to="/">Home</Link>
            {` `}
            <Link to="/line">LineChart</Link>
            {` `}
            <Link to="/bar">BarChart</Link>
            {` `}
            <Link to="/rankplot">Sketchy Rectangle Plot</Link>
            {` `}
            <Link to="/climate">Climate Dashboard</Link>
            {` `}
            <Link to="/linebrush">Line Brush</Link>
            {` `}
            <Link to="/network">Network Diagram</Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/line" component={LineChart} />
            <Route exact path="/bar" component={BarChart} />
            <Route exact path="/rankplot" component={RankPlot} />
            <Route exact path="/climate" component={ClimateDashboard} />
            <Route exact path="/linebrush" component={LineBrush} />
            <Route exact path="/network" component={NetworkDiagrams} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
