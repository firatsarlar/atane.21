import { h, Component } from "preact";
import { Pages } from "./pages/all";
// import generateNoise from "./utils/noise"
import * as smoothscroll from 'smoothscroll-polyfill';
import {Logo} from './utils/logox';

export class App extends Component {
  componentDidMount() {
    smoothscroll.polyfill();

    // generateNoise("#leftnav", 0.25);
    // generateNoise("#mcont", 0.30);
  }

  render() {
    return (
      <div class="contentb">
        <div id="left-section" class="noise">
        <a href="#giris"><Logo id="logoTop" /></a>
          <Nav />
        </div>
        <Pages />
        
      </div>
    );
  }
}
// const Logo = () => (
//   <img id="logo" src="/images/logo.svg"></img>
// );

const Nav = () => {
  let prev, prevHash;
  let click = (e) => {

    // return;
    let el = e.target;
    if(el.tagName != "A"){
      el = el.parentNode;
    }
    if (!prevHash) {
      document.body.classList.remove("giris");
    }
    else {
      document.body.classList.remove(prevHash);
    }
    prevHash = el.hash.substr(1);
    document.body.classList.add(prevHash);

    let wtop = document.querySelector(el.hash).offsetTop - 0;

    document.querySelector(".contentb").scrollTo({ top: wtop, left: 0, behavior: 'smooth' });

    
    if (!prev)
      prev = el.parentNode.parentNode.firstChild;

    
    prev.classList.toggle("active");
    el.parentNode.classList.toggle("active");
    prev = el.parentNode;
    if(history.pushState) {
      history.pushState(null, null, '#' + prevHash);
  }
  else {
      location.hash = '#myhash';
  }
   
    e.preventDefault();
  };
  return (
    <ul id="nav">
      <li class="active">

        <a onClick={click} href={"#giris"}>ATÖLYE TANE</a>
        {/* <Logo innerOnly viewBox="60 76 130 49" style="width:90px;position: relative;top: 7px;" /> */}
        <span /></li>
      <li>

        <a onClick={click} href={'#dersler'}>GÜMÜŞ TAKI – MÜCEVHER YAPIMI  KURSU</a>
        <span /></li>
      <li>

        <a onClick={click} href={"#atolye"}>SERAMİK ATÖLYESİ</a>
        <span /></li>
      <li>

        <a onClick={click} href={"#galeri"}>GALERİ</a>
        <span /></li>
      <li>

        <a onClick={click} href={"#kolleksiyon"}>KOLLEKSİYON</a>
        <span /></li>
      <li>

        <a onClick={click} href={"#faq"}>S.S.S</a>
        <span /></li>
      {/* <li>

        <a onClick={click} href="#iletisim">İletişim</a>
        <span /></li> */}
    </ul>
  );
}
/*
function scrollTo( el,  duration) {
  let container  = document.querySelector(".contentb");
  let to = el.offsetTop ;
  // if (container.scrollTop == to) return;
  var diff = to - container.scrollTop;
  var scrollStep = Math.PI / (duration / 10);
  var count = 0, currPos;
  let start = el.scrollTop;
  let scrollInterval = setInterval(function(){
      if (container.scrollTop != to) {
          count = count + 1;
          currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
          container.scrollTop = currPos;
      }
      else { clearInterval(scrollInterval); }
  },10);
}*/
/*
document.querySelector('.hello').scrollIntoView({ behavior: 'smooth' });
export type AppProps = {
  name: string;
}
type AppState = {
  name: string;
}
export   class App extends Component<AppProps, AppState> {
  state:AppState;

  constructor(props: AppProps) {
    super(props);
    this.state = { name: props.name };
  }
  componentDidMount() {
    setTimeout(() => { 
      var state = this.state;
      state.name = "33' bbbbb 3 worked as expected";
      this.setState(state);
    }, 2000);
  }
  render(props: AppProps, state: AppState) {
    return <h1>props: {props.name} state: {state.name}</h1>;
  }
}
*/