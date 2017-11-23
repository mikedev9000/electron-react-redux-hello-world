import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';
import Root from './view/Root';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('app')
);

/*window.onload = function(){
  ReactDOM.render(<Main />, document.getElementById('app'));
}*/
