import React, { Component } from 'react';
import './index.css';

class RacersForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          {/*take in passed down function from component render*/}
          <form onSubmit={this.props.getStandings}>
            <input type="text" name="season" placeholder="Season..." />
            <input type="text" name="round" placeholder="Round..." />
            <input type="submit" value="Get Standings" />
          </form>
        </div>
      </div>
    );
  }
}

export default RacersForm;
