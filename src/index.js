import App from './App.js';
import * as ReactDOM from 'react-dom'
import stars from "./stars.json";



ReactDOM.render(<App star={stars} />, document.querySelector('#table'));
