import { h, render } from 'preact';
import Giris from "./giris";
import Atolye from "./atolye";
import Dersler from "./dersler";
import Faq from "./faq";
import Galeri from "./galeri";
// import Iletisim from "./iletisim";
import Kolleksiyon from "./kolleksiyon";
import IconX from '../utils/icon';

export const Pages = () => (

    <div id="mcont">
        <Giris></Giris>
        <Dersler></Dersler>
        <Atolye></Atolye>
        <Galeri></Galeri>
        <Kolleksiyon></Kolleksiyon>
        <Faq></Faq>

        <IletisimX />
    </div>

);
const IletisimX = () => (
    <div id="iletisim-alt">
        <div id="ia-cont">
            <a href="mailto:atolyetane@gmail.com"><IconX xclass="iletisim-ico" name="email" /><span class="iletisim-sp">atolyetane@gmail.com</span></a>
            <a href="#"><IconX xclass="iletisim-ico" name="phone" /><span class="iletisim-sp">+90 0535 637 4664</span></a>
            <a href="#"><IconX xclass="iletisim-ico" name="map-marker" /><span class="iletisim-sp"></span></a>
            <a href="#"><IconX xclass="iletisim-ico" name="facebook" /><span class="iletisim-sp"></span></a>
            <a href="https://www.instagram.com/atolyetane/" target="_blank"><IconX xclass="iletisim-ico" name="instagram" /><span class="iletisim-sp"></span></a>


        </div>
    </div>
);