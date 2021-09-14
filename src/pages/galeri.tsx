import { h, render } from 'preact';
import { Scrollbars } from 'preact-custom-scrollbars';

export default () => (
    <Scrollbars class="sb"
        // autoHeight 
        // autoHeightMin={600} 
        autoHide={true}
        renderThumbVertical={props => <div {...props} className="thumb-vertical" />}>
        <div id="galeri" class="pg-ct">
            {/* <img src="/images/bg-gallery.jpg" /> */}
            <div class="bgx"></div>
            <div id="gbu">
                <h2 >GALERİ</h2>
                
                <br /><br /><span style="display:block; text-align:center;font-size:1.3rem">Atölyemizden kareler..... </span> 
                <div class="gallery-container">
                    
                    {ximages.map(el => (
                        <div class="gallery-item mdl-shadow--2dp">
                            <img src={"/images/" + el.src} />
                            {/* <span>{el.title}</span> */}
                        </div>
                    ))}

                </div>
            </div>
            {/* <div style="height:50px;display:block;padding:50px;float:none;clear:all;">&nbsp;</div> */}
        </div>
    </Scrollbars>
);
let ximages = [
    { src: "g10.jpg", title: "..", },
    { src: "g5.jpg", title: "..", },
    { src: "g6.jpg", title: "..", },
    { src: "g11.jpg", title: "..", },
    { src: "g12.jpg", title: "..", },
    { src: "g3.jpg", title: "..", },
    { src: "g4.jpg", title: "..", },
    { src: "g13.jpg", title: "..", },
    { src: "g15.jpg", title: "..", },
    { src: "g1.jpg", title: "..", },
    { src: "g2.jpg", title: "..", },
    { src: "g14.jpg", title: "..", },

    // { src:"pic05.jpg", title:"Zaman tüneli", },
    // { src:"pic06.jpg", title:"Kikiri", },
    // { src:"pic07.jpg", title:"İpsum", },

];