import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        buttonEnabled: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({ buttonEnabled: event.target.value.length > 0 ? true : false });
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }

    render() {
      return (
        <form role="form" className="form" onSubmit={this.handleSubmit}>
            { this.props.icon }
            <div className="form-label-group">
                <input role="textbox" tabIndex="1" id="username" type="text" required/>
                <label className="form-label">Username</label>
            </div>
            <div className="form-label-group">
                <input tabIndex="2" id="password" type="password" value={this.state.value} onChange={this.handleChange} required/>
                <label className="form-label">Password</label>
            </div>
            <button role="button" tabIndex="3" disabled={ this.state.buttonEnabled ? "" : "disabled"  } className="form-button" href="">Log in</button>
        </form>
      );
    }
  }

  export default Form