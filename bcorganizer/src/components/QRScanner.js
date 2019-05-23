import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { postQrcode } from '../actions';
import { connect } from 'react-redux';

class Scanner extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.props.postQrcode(this.state.result);
      this.setState({
        result: data
      })
    }
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default connect(null, { postQrcode })(Scanner);