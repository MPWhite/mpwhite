import React, {Component} from 'react';
import './dashboard.scss'
import Grid from "@material-ui/core/Grid";
import GraphCard from "../../components/GraphCard/GraphCard";
import StatCard from "../../components/StatCard/StatCard";
import BoxPlotCard from "../../components/BoxPlotCard/BoxPlotCard";

class Dashboard extends Component {
  render() {
    return (
      <div className='Dashboard'>
        <h1>Live Stats</h1>
        <Grid container spacing={3}>
          <Grid item>
            <StatCard title='Sleep' value={8.7} unit='hr'/>
          </Grid>
          <Grid item>
            <StatCard title='Caffeine' value={175} unit='mg'/>
          </Grid>
          <Grid item>
            <StatCard title='Coding' value={2.5} unit='hr'/>
          </Grid>
          <Grid item>
            <StatCard title='Exercise' value={0.5} unit='hr'/>
          </Grid>
          <Grid item>
            <StatCard title='Mood' value={6.5} unit='/10'/>
          </Grid>
        </Grid>
        <h1>Recent Data</h1>
        <Grid container spacing={3}>
          <Grid item>
            <GraphCard />
          </Grid>
          <Grid item>
            <BoxPlotCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;