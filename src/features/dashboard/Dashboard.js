import React, {Component} from 'react';
import './dashboard.scss'
import Grid from "@material-ui/core/Grid";
import GraphCard from "../../components/GraphCard/GraphCard";
import StatCard from "../../components/StatCard/StatCard";
import BoxPlotCard from "../../components/BoxPlotCard/BoxPlotCard";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.fetchData()
    setInterval(() => {
      console.log("Fetching")
      this.fetchData()
    }, 500000)
  }

  fetchData() {
    fetch('/api/user/dashboard')
      .then(data => {
        return data.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          loaded: true,
          data: data,
        })
      })
      .catch(err => {
        console.error(err)
      })
  }


  render() {
    const { loaded, data } = this.state;
    if (!loaded || !data) {
      return <div />
    }
    console.log(data)
    return (
      <div className='Dashboard'>
        <h1>Live Stats</h1>
        <Grid container spacing={3}>
          <Grid item>
            <StatCard title='Sleep 😴' value={data?.sleep.toFixed(1)} unit='hr' />
          </Grid>
          <Grid item>
            <StatCard title='Caffeine ☕' value={data?.caffeine} unit='mg'/>
          </Grid>
          <Grid item>
            <StatCard title='Coding 👨‍💻' value={data?.coding} unit='hr'/>
          </Grid>
          <Grid item>
            <StatCard title='Exercise 🏃‍' value={data?.exercise} unit='hr'/>
          </Grid>
          <Grid item>
            <StatCard title='Mood 🧘' value={data?.mood} unit='/10'/>
          </Grid>
        </Grid>
        <h1>Recent Data</h1>
        <Grid container spacing={3}>
          <Grid item>
            <GraphCard data={data?.sleep_durations}/>
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