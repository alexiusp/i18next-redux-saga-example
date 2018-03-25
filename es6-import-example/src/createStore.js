import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { i18nextInit, i18nextSaga } from 'i18next-redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import { defaultLanguage } from './constants/globals';

// simple example i18next config with preloaded translations
const i18nextConfig = {
  fallbackLng: defaultLanguage,
  load: 'languageOnly',
  whitelist: ['de', 'en', 'ru'],
  debug: true,
  resources: {
    en: {
      translation: {
        hello: 'Hello, World!',
      },
    },
    de: {
      translation: {
        hello: 'Hallo, Welt!',
      },
    },
    ru: {
      translation: {
        hello: 'Привет, мир!',
      },
    },
  },
};

// your sagas middleware
const sagaMiddleware = createSagaMiddleware();
// 18next saga middleware
const i18nextMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, i18nextMiddleware)
  )
);
sagaMiddleware.run(rootSaga);
i18nextMiddleware.run(i18nextSaga);

// dispatch init action before actual app is instantiated
// this allows us to have loading state on start of the application
// and prevent calls to translation function before it was properly initialized
store.dispatch(i18nextInit(i18nextConfig));

export default store;
