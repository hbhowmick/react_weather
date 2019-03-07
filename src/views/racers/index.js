import React, { Component } from 'react';
import './index.css';
import RacersForm from '../../components/racersForm';
import RacersTable from '../../components/racersTable';

class Racers extends Component {
  constructor() {
    super();
    this.state = {
      'data': []
    }
  }

  getStandings = async(e) => {
    e.preventDefault();
    // console.log(e);

    let season = e.target.elements.season.value;
    let round = e.target.elements.round.value;

    const URL = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`;

      let response = await fetch(URL);
      let data = await response.json();
      // console.log(data);

      this.setState({
        'data': data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      });
      // console.log(this.state.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
  }

  render() {
    return (
      <div className="container">
        {/*pass down getStandings to form*/}
        <RacersForm getStandings={this.getStandings} />
        {/*if initial list was 'standings': standings={this.state.standings}*/}
        <RacersTable data={this.state.data} />
      </div>
    );
  }
}

export default Racers;
