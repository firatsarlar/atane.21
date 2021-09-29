import { h, render } from 'preact';
import { Scrollbars } from 'preact-custom-scrollbars';
export default () => (
    <Scrollbars class="sb"
        // autoHeight 
        // autoHeightMin={600} 
        autoHide={true}
        renderThumbVertical={props => <div {...props} className="thumb-vertical" />}><div id="atolye" class="pg-ct">


            <img src="/images/bg_workshop.jpg" />
            <h2 >GÜNLÜK ETKİNLİKLER</h2>
            <p >

                Günlük atölye etkinliğimiz tasarım ve yaratmaya yeni başlayacaklar, metal işleme tekniklerini öğrenmek ve kuyumculuğu daha yakından tanımak isteyenler için uygun bir çalışmadır.<br /><br />


                <i>Hafta içi Perşembe günleri 18:30 – 22:00<br />

                    Hafta sonu Pazar günleri 14:00 – 17:30<br /><br /></i>

                Atölye etkinliğimizde tercihe göre bakır ve pirinç kullanarak 2 farklı proje tamamlayacağız. Ajur, freze kullanımı, metal doku ve desen çalışması, eğe ve zımpara kullanımı, cilalama ve parlatma gibi temel metal işleme tekniklerini uygulayarak metale şekil vermeyi öğreneceğiz.<br /><br />

                Sevgili ustamız Sadekar Bedros Çirişyan engin bilgisi ile bu antik sanatın inceliklerini, geçmişini ve bugününü anlamamıza yardımcı olacak.<br /><br />

                Çalışmanın sonunda, seçmiş olduğunuz projenin zorluğuna göre 2 veya daha fazla tamamlanmış el emeği takınız olacak.<br /><br />

                Etkinliklerde kullandığımız doğal taşlar ve pirinç bakır gibi yarı değerli metaller etkinlik ücretine dahildir. Etkinliklerimize ilk kez katılıyorsanız bakır ve pirinç ile çalışmanızı öneriyoruz.<br /><br />

                Pratiğiniz geliştikçe ve yeterli tecrübeyi edindikten sonra tercih edebileceğiniz gümüş, altın gibi değerli metaller ve kıymetli taşların maliyeti katılımcıya aittir. Bu tip malzemelerin temini ile ilgili gerekli bilgi ve desteği atölyemiz sağlamaktadır veya sipariş ile maliyeti karşılığında tarafımızdan temin edilebilir. Kıymetli metal ve taşlar istek üzerine temin edileceğinden katılımcılarımızın randevu alırken isteklerini belirtmelerini rica ederiz.<br /><br />

                Etkinlik katılımcı sayısı Covid-19 salgını sebebiyle en fazla 4 katılımcı ile sınırlandırılmıştır.<br /><br />

                Etkinlik tarihleri katılımcıların müsait günleri dikkate alınarak, 15 gün önceden yeterli katılımcı sayısına göre belirlenecektir. Bu nedenle en az 15 gün önceden randevunuzu almanızı ve randevu gününe sadık kalmanızı önemle rica ederiz.          <br /><br />
            </p>
        </div>
    </Scrollbars>
);