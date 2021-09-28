import { h, render } from 'preact';

import { Scrollbars } from 'preact-custom-scrollbars';


export default () => (
  <Scrollbars class="sb"
    // autoHeight 
    // autoHeightMin={600} 
    autoHide={true}
    renderThumbVertical={props => <div {...props} className="thumb-vertical" />}>
    <div id="dersler" class="pg-ct">
      <div class="bgx"></div>
      <h2 >GÜMÜŞ TAKI – MÜCEVHER YAPIMI  KURSU</h2>
      <p>
        Atölyemizde hem başlangıç seviyesi hem de tecrübeli katılımcılara uygun bir çalışma ortamı sunulmaktadır.<br /><br />
        İlk derslerde sadekarlık ve gümüş işlemede kullandığımız ekipman ve el aletleri ile tanışıyor, takı yapımı ve sadekarlığın başlıca prensiplerini anlıyoruz.<br /><br />
        Bakır  ve pirinç ile çalışarak metali işlemeyi ve şekillendirmeyi öğreniyor, pratiğimizi geliştirdikten sonra gümüş ile çalışmaya başlıyoruz.<br /><br />
        İlerleyen derslerde tasarımı ve işçiliği ile tamamen size ait takı kolleksiyonunuzu oluşturmaya başlayabilirsiniz. <br /><br />
        Bilge ustamız Bedros Bey, çalışmalarımızın her aşamasında bizimle tecrübelerini ve engin bilgisini paylaşarak, sadekarlık sanatının inceliklerini anlamamıza yardımcı olacak.<br /><br />

        ÖĞRENDİĞİMİZ TEKNİKLER:<br />
        <ul>
          <li>Metal kesim ve tesfiye</li>
          <li>Aygaz şalomo kullanarak metalleri kaynatmak</li>
          <li>Metal  doku ve desen çalışmaları</li>
          <li>Polisaj ( cilalama ve parlatma )</li>
          <li>Perçin yapımı</li>
          <li>Taş yuvalama ve mıhlama</li>
          <li>Zincir yapımı</li>
          <li>Fermuar ve kilit yapımı</li>
        </ul>
        <br />
        Derslerde kullandığıımız doğal taşlar ve pirinç,bakır gibi yarı değerli metaller kurs ücretine 	dahildir. <br />

        Pratiğiniz geliştikçe, ilerleyen derslerde kendi tasarımlarınızda kullanacağınız gümüş, altın gibi değerli metaller ve kıymetli taşlar kurs ücretine dahil değildir.
        Sipariş ile maliyeti karşılığında tarafımızdan temin 	edilir.<br />

        Ders süresince çay, kahve , soğuk içecekler, salata ve  atıştırmalıklar servis edilir.<br /><br />


        <span class="notes">
          * Güvenli bir çalışma ortamı için çalışma esnasında lütfen burnu kapalı ayakkabı giyiniz ve saçlarınızı toplayınız.<br />

          * Atkı, şal, sarkık kollu bluz, uzun kolyeler gibi çalışma alanında engel ve risk yaratacak giyim ve aksesuarları tercih etmeyiniz.<br />

          * Gözlük kullanıyorsanız yanınızda getirmeyi unutmayınız.<br />
        </span>

      </p>
    </div>
  </Scrollbars>
);