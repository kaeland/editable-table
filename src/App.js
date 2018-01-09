import React from 'react';
import { render } from 'react-dom';
import firebase from './firebase';

// Component Imports
import Table from './components/Table';

let labData = [
  { process: 'Mixed Liquor', mixedLiquor: '', secondary: '', effluent: '' },
  { process: 'Secondary', mixedLiquor: '', secondary: '', effluent: '' },
  { process: 'Effluent', mixedLiquor: '', secondary: '', effluent: '' }
];

let labDataRef = firebase.database().ref('labData'); 

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labData
    };
  }

  componentDidMount() {
    labDataRef.on('value', (snapshot) => {
      if (snapshot.val() === null) {
        labDataRef.set(this.state.labData);
      }  

      let data = snapshot.val();
      this.setState({
        labData: data
      });
    });
  }

  render() {
    console.log(this.state.labData, 'App.js')
    return (
      <div>
        <Table data={this.state.labData} />
      </div>
    );
  }
}
  

render(<App />, document.getElementById('root'));
