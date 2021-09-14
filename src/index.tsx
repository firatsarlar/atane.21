import { h, render } from 'preact';
// require('preact/debug');
// import { Clock } from "./clock";
// import { App } from "./app";
import "./main.scss";
//import generateNoise  from "./utils/noise"


let root;
function init() {
	let App = require('./napp').App;
	root = render(<App name=""> </App>, document.body, root);
}

if ((module as any).hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	(module as any).hot.accept('./napp', () => requestAnimationFrame(init) );
}

init(); 

