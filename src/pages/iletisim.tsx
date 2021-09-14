import { h, render } from 'preact';
import IconX from '../utils/icon';

export default () => (
    <div id="iletisim" class="pg-ct">
        <br/><br/><br/><br/><br/><br/>
        <h2 >İLETİŞİM</h2>
        <br/><br/>
        <p><IconX  xclass="iletisim-ico" name="email" /><span class="iletisim-sp">e-mail: atolyetane@gmail.com</span></p>
        <p><IconX xclass="iletisim-ico" name="phone" /><span class="iletisim-sp">Telefon: +90 563 9901034</span></p>
        <p><IconX xclass="iletisim-ico" name="map-marker" /><span class="iletisim-sp">Konum..</span></p>
        <p><IconX xclass="iletisim-ico" name="facebook" /><span class="iletisim-sp">facebook..</span></p>
        <p><IconX xclass="iletisim-ico" name="instagram" /><span class="iletisim-sp">instagram..</span></p>
    </div>
); 