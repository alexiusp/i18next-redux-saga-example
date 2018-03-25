import React, { Component } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import {
  i18nextChangeLanguage
} from 'i18next-redux-saga';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  changeLanguage = (lang) => (e) => {
    e.preventDefault();
    console.log('change language', lang);
    this.props.onChangeLanguage(lang);
  }
  render() {
    const { loading, lang } = this.props;
    return (loading > 0) ? (
      <div className="App-loading"><img src={logo} className="App-logo" alt="logo" /></div>
    ) : (
      <div className="App">
        <header className="App-header">
          <button className={lang === 'en' ? 'active' : ''} onClick={this.changeLanguage('en')} >English</button>
          <button className={lang === 'de' ? 'active' : ''} onClick={this.changeLanguage('de')} >Deutsch</button>
          <button className={lang === 'ru' ? 'active' : ''} onClick={this.changeLanguage('ru')} >Русский</button>
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
  const lang = app.lang;
  return {
    loading,
    lang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLanguage: (lang) => {
      dispatch(i18nextChangeLanguage(lang));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
