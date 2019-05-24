import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { postQrcode } from '../actions';
import { connect } from 'react-redux';

class Scanner extends Component {
  state = {
    "qrCode": 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        qrCode: data
      })
      console.log(this.state)
      this.props.postQrcode(this.state);
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
          style={{ width: '100%', borderRadius: '5rem'}}
        />
        {/* <p>{this.state.qrCode}</p> */}
      </div>
    )
  }
}

export default connect(null, { postQrcode })(Scanner);