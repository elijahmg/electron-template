import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './pages';

function render() {
  const root = document.getElementById('root');

  ReactDOM.render(<Index/>, root);
}

render();
