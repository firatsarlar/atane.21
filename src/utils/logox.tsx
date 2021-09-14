import * as Preact from 'preact';
import { h, Component, VNode } from 'preact';
export interface LogoProps { //extends Preact.ComponentProps {
    innerOnly?: boolean,
    id?: string,
    style?: string, 
    viewBox?:string
}
export class Logo extends Component<LogoProps, any> {

    render() {
        
        return ( <img src="../images/logo_338x236.png" /> );
    }
}

