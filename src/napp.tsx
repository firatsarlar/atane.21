import { h, Component } from "preact";
import { routes } from './route-defs';
import  { Router, route } from "preact-router";
import Match from 'preact-router/match';
import { Link as Linkx } from 'preact-router/match';
import IconX from './utils/icon';


const Link = (props) => (
    <Linkx activeClassName="active" class={props.classx} href={props.href} {...props}>{props.children}</Linkx>
);

const route_comp_tr =  routes.tr.map( (route,i ) => {  

    // const CC = ( require('./pages/' + route.link))[route.component];
    const CC = ( require('./pages/' + route.component).default)
    // route_comp_tr += "<" + route.component + " path=\"/tr/" + route.link + "\"/>";
   return   (<CC key={i} path={'/tr/' + route.link} title={route.display}/>    );
//    return (<Markup markup={"<" + route.component + " key=" + i + " path=\"/tr/" + route.link + "\"/>"} components={ window[route.component] }/>);
});
// console.log(route_comp_tr);
const link_comp_tr = routes.tr.map( (route) => {
    
    return (
        <li><Link href={'/tr/' + route.link}>{route.display}<span /></Link></li>
    );
 });

 export class App extends Component {
    componentDidMount() {
    //   smoothscroll.polyfill();
    // route('/tr/atolye-tane');
      // generateNoise("#leftnav", 0.25);
      // generateNoise("#mcont", 0.30);
    }
    handleRoute =  (e) => {
      //  console.log("oo");
        //    console.dir(e);
        document.getElementsByTagName("TITLE")[0].innerHTML = e.current.props.title;
        // console.dir(e);
    }

    render() {
      return (
        <div class="contentb" lang="tr">
          <div id="left-section" class="noise">
          <Link href="/tr/atolye-tane" ><img src="/images/logo_338x236.png"  id="logoTop"  /></Link>
          <ul id="nav">{link_comp_tr}</ul>
          </div>
          <div id="mcont">
          
            <Router onChange={this.handleRoute}>
             <Redirect path="/" to="/tr/atolye-tane" />
            {route_comp_tr}</Router>
            <IletisimX/>
          </div>

        </div>
      );
    }
  }

  const IletisimX = () => (
    <div id="iletisim-alt"> 
        <div id="ia-cont">
            <a href="mailto:atolyetane@gmail.com"><IconX xclass="iletisim-ico" name="email" /><span class="iletisim-sp">atolyetane@gmail.com</span></a>
            <a href="#"><IconX xclass="iletisim-ico" name="phone" /><span class="iletisim-sp">+90 0532 571 0331</span></a>
            <a href="#"><IconX xclass="iletisim-ico" name="map-marker" /><span class="iletisim-sp">Yenişehir, PENDİK </span></a>
            <a href="https://www.instagram.com/taneboutique/" target="_blank"><IconX xclass="iletisim-ico" name="instagram" /><span class="iletisim-sp">taneboutique</span></a>


        </div>
    </div>
);
interface RedirectPrpos{
  to:string;
}
export default class Redirect extends Component<RedirectPrpos,any> {
  componentWillMount() {
    route(this.props.to, true);
  }

  render() {
    return null;
  }
}