import React, { Component } from 'react';
import './index.css';

class RacersTable extends Component {
  render() {
    // console.log(this.props.data);
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Nationality</th>
                <th>Sponsor</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              { this.props.data &&
                this.props.data.map(
                  position =>
                  <tr key={position.Driver.driverId}>
                    <td>{ position.position }</td>
                    <td>
                      <a target="_blank" href={position.Driver.url}>{ position.Driver.givenName + ' ' + position.Driver.familyName }</a>
                    </td>
                    <td>{ position.Driver.nationality }</td>
                    <td>{ position.Constructors[0].name }</td>
                    <td>{ position.points }</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RacersTable;
