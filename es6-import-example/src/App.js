import React, { Component } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  changeLanguage = (lang) => (e) => {
    e.preventDefault();
    console.log('change language', lang);
  }
  render() {
    const loading = this.props.loading;
    return (loading > 0) ? (<img src={logo} className="App-logo" alt="logo" />) : (
      <div className="App">
        <header className="App-header">
          <a href="#" onClick={this.changeLanguage('en')} >en</a>
          <a href="#" onClick={this.changeLanguage('de')} >de</a>
          <a href="#" onClick={this.changeLanguage('ru')} >de</a>
        </header>
        <p className="App-content">
          <span>{i18next.t('hello')}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => {
  const loading = app.loading;
  return {
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStart: () => {
      // dispatch();
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
