import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      lab: props.data
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(index, process, value) {
    const newState = this.state.lab.map((item, i) => {
      if (i === index) {
        return { ...item, [process]: value }
      }
      return item;
    });

    this.setState({
      lab: newState
    });
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        editable: !prevState.editable,
      };
    });
  }

  render() {
    return (
      <div style={styles}>
        <table>
          <thead>
            <tr>
              <th>Process</th>
              <th>Ammonia</th>
              <th>Phosphorous</th>
              <th>Ph</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lab.map((row, index) => {
              return (
                <tr>
                  <td>
                    {this.state.lab[index].process}
                  </td>
                  <td>
                    {this.state.editable
                      ? (
                        <input
                          name="mixedLiquor"
                          type="text"
                          value={this.state.lab[index].mixedLiquor}
                          onChange={
                            (e) => this.handleChange(index, 'mixedLiquor', e.target.value)
                          }
                        />
                      )
                      : this.state.lab[index].mixedLiquor
                    }
                  </td>
                  <td>
                    {this.state.editable
                      ? (
                        <input
                          name="secondary"
                          type="text"
                          value={this.state.lab[index].secondary}
                          onChange={
                            (e) => this.handleChange(index, 'secondary', e.target.value)
                          }
                        />
                      )
                      : this.state.lab[index].secondary
                    }
                  </td>
                  <td>
                    {this.state.editable
                      ? (
                        <input
                          name="effluent"
                          type="text"
                          value={this.state.lab[index].effluent}
                          onChange={
                            (e) => this.handleChange(index, 'effluent', e.target.value)
                          }
                        />
                      )
                      : this.state.lab[index].effluent
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />

        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  };
};

const labData = [
  { process: 'Mixed Liquor', mixedLiquor: '', secondary: '', effluent: '' },
  { process: 'Secondary', mixedLiquor: '', secondary: '', effluent: '' },
  { process: 'Effluent', mixedLiquor: '', secondary: '', effluent: '' }
];

render(<App data={labData} />, document.getElementById('root'));
