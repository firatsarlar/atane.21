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
                        <h2 style="text-align:center;"><img src="/images/loto_tt2x.png" style="width:380px;display:inline;border-bottom:none" /></h2>
                        <p >
                                Atölye Tane, yaratıcı tarafını tanımak, kendisine ve yaratmaya zaman ayırmak  isteyen herkese açık, donanımlı bir sadekar atölyesidir.  <br /><br />
                                Yenişehir Pendik’te yer alan atölyemizde pirinç, bakır, gümüş ve altın gibi metalleri işliyoruz.
                                Doğal malzemeler, yarı kıymetli ve kıymetli taşlar kullanarak takı ve aksesuarlar yapıyoruz. <br /><br />
                                Eşsiz hediyeler vermek isteyenler için atölyemizde el işçiliği ile ürettiğimiz özel tasarımlarımız sergi alanımızda beğeninize sunulmakta,
                                kendi tasarımlarını hayata geçirmek isteyenler için ise özel siparişler çalışılmaktadır.<br /><br />

                                
                        </p>
                        <KurslarBasliyor />
                </div>
        </Scrollbars>
);

const KurslarBasliyor = () => {
        return (
                <p>
                        <b>Etkinlik ve kurslarımız başlıyor…</b><br /><br />

                        Atölye Tane'de Covid - 19 salgını nedeniyle ara verdiğimiz çalışmalarımıza Ekim 2021 itibariyle başlıyoruz.Atölye etkinliklerimiz Kadıköy’deki yeni atölyemizin açılışına kadar Pendik - Yenişehir de devam edecek.<br /><br />

                        45 yıllık tecrübesi ile Sadekar Bedros Çirişyan çalışmalarımızda bize rehberlik etmeye devam edecek ve bu antik sanatın inceliklerini bizimle paylaşacak.<br /><br />

                        Çalışma grupları Covid - 19 salgını sebebiyle en fazla 4 kişi olarak sınırlandırılmıştır.<br /><br />

                        Etkinlik ve kurs tarihleri katılımcıların müsait günleri dikkate alınarak, yeterli katılımcı sayısına göre belirlenecektir.Bu nedenle 15 gün önceden randevunuzu almanızı ve randevu gününe sadık kalmanızı önemle rica ederiz.<br /><br />

                        Günlük atölye etkinlikleri ve aylık kurs programı ile ilgili detayları yandaki ilgili linklerde bulabilirsiniz.<br /><br />
                </p>
        )
}