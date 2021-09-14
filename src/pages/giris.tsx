import { h, render } from 'preact';
import IconX from '../utils/icon';
import { Scrollbars } from 'preact-custom-scrollbars';

export default () => (
        <Scrollbars class="sb"
                // autoHeight 
                // autoHeightMin={600} 
                autoHide={true}
                renderThumbVertical={props => <div {...props} className="thumb-vertical" />}>
                <div id="giris" class="pg-ct ">
                        <div class="bgx"></div>

                        {/* <br /><br /> */}
                        <h2 style="text-align:center;"><img src="/images/atane-log-tt.png" style="width:340px;display:inline;border-bottom:none" /></h2>
                        <p >
                                Atölye Tane, yaratıcı tarafını tanımak, kendisine ve yaratmaya zaman ayırmak  isteyen herkese açık, donanımlı bir sadekar atölyesidir.  <br /><br />
                                Yenişehir Pendik’te yer alan atölyemizde pirinç, bakır, gümüş ve altın gibi metalleri işliyoruz.
Doğal malzemeler, yarı kıymetli ve kıymetli taşlar kullanarak takı ve aksesuarlar yapıyoruz. <br /><br />
                                Bir yandan üretiyor, bir yandan öğreniyoruz. <br /><br />
                                Eşsiz hediyeler vermek isteyenler için atölyemizde el işçiliği ile ürettiğimiz özel tasarımlarımız sergi alanımızda beğeninize sunulmakta,
kendi tasarımlarını hayata geçirmek isteyenler için ise özel siparişler çalışılmaktadır.<br /><br />
                                <b>Atolyemizi kış ve bahar ayları boyunca yaratmaktan ve yapmaktan zevk alanlara açıyoruz !</b><br /><br />
                                Bilindiği kadarıyla 100.000 yıl öncesinden itibaren vucutlarımızı takı ve aksesuarlarla süslüyoruz. <br /><br />
                                Bu antik sanatın inceliklerini paylaşmak üzere 45 yıllık tecrübesi ile Sadekar Bedros Çirişyan Salı günleri
Takı Tasarım Atölyemizin eğlenceli çalışma ortamında bizlerle. <br /> <br />
                                Düzenli çalışma grubumuz, özel tatil günleri dışında her hafta Salı günü 18:00 – 21:30 arasında devam etmektedir.<br /><br />
                                <span class="pnote">*   Alternatif çalışma günleri, katılımcıların ortak tercihleri doğrultusunda belirlenmeye çalışılacaktır. Çalışma grupları  5 kişiliktir.</span>
                        </p>
                </div>
        </Scrollbars>
);
