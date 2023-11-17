var cookieStyle = `
<style>
    .cookie-manager{
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        font-size: 13px;
        text-align: center;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 9998;
    }
    .cookie-manager-bar{
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        align-items: center;
        padding: 10px;
        border-top: #303030;
        background-color: #000;
    }
    .cookie-manager-bar p{
        color: #FFF;
        padding-right: 15px;
        margin-bottom: 0;
    }
    .cookie-manager-buttons{
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .cookie-manager-button{
        background-color: #FFF;
        cursor: pointer;
        padding: 8px 20px;
        color: #000;
        font-weight: 500;
        font-size: 12px;
        margin: 0 4px;
        border-radius: 8px;
        line-height: 1;
        min-width: 90px;
    }
    .cookie-manager-button.primary{
        background-color: #C12A19;
        color: #FFF;
    }
    .cookie-manager-button:hover{
        opacity: .75;
    }
    .cookie-manager-modal{
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        height: 100%;
        z-index: 30;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        display: none;
    }
    .cookie-manager-modal-wrapper{
        border-radius: 8px;
        background: #F9F9FA;
        position: relative;
        z-index: 9;
        width: 100%;
        max-width: 800px;
        display: -webkit-flex;
        display: flex;
        margin-inline: 50px;
    }
    .cookie-manager-modal-panel{
        position: relative;
        max-width: 255px;
        -webkit-flex: 0 0 255px;
        flex: 0 0 255px;
        -ms-flex: 0 0 255px;
        background: #FFF;
        z-index: 10;
        -webkit-box-shadow: 1px 0 5px -1px rgba(0,0,0,.15);
        box-shadow: 1px 0 5px -1px rgba(0,0,0,.15);
        padding: 20px;
        text-align: left;
        border-top-left-radius: 7.5px;
        border-bottom-left-radius: 7.5px;
    }
    .cookie-manager-modal-panel h4{
        font-size: 20px;
        font-weight: bold;
        color: #000;
        margin-bottom: 1rem;
        text-align: left;
    }
    .cookie-manager-tab-title{
        background: #F9F9FA;
        cursor: pointer;
        padding: 13px;
        font-weight: 500;
        font-size: 12px;
        border-radius: 4px;
        margin: 5px 0;
        border: 1px solid #F4F5F6;
        line-height: 1;
        -webkit-transition: all .15s;
        transition: all .15s;
    }
    .cookie-manager-tab-title:hover{
        background: #EDEEF1;
    }
    .cookie-manager-tab-title.is-active{
        color: #FFF;
        background: #C12A19;
    }
    .cookie-manager-modal-content{
        -webkit-flex-grow: 0;
        flex-grow: 0;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        -webkit-flex-basis: -webkit-calc(100% - 295px);
        flex-basis: calc(100% - 295px);
        max-width: -webkit-calc(100% - 295px);
        max-width: calc(100% - 295px);
        -ms-flex: 0 0 calc(100% - 295px);
        color: #000;
    }
    .cookie-manager-tab-content{
        padding: 20px;
        text-align: left;
        min-height: 225px;
        color: #000;
    }
    .cookie-manager-tab-item{
        display: none;
    }
    .cookie-manager-tab-item .item-title{
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 15px;
    }
    .cookie-manager-tab-item .item-value{
        margin: 15px 0;
    }
    .cookie-manager-tab-item .item-value .toggle-switch{
        position: relative;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        width: 50px;
        height: 27px;
    }
    .cookie-manager-tab-item .item-value .toggle-switch .toggle-slider{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #565656;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
    }
    .cookie-manager-tab-item .item-value .toggle-switch input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    .cookie-manager-tab-item .item-value .toggle-switch .toggle-slider.disabled{
        opacity: .35;
    }
    .cookie-manager-tab-item .item-value .toggle-switch input:checked+.toggle-slider.disabled{
        background-color: #000;
    }
    .cookie-manager-tab-item .item-value .toggle-switch input:checked+.toggle-slider{
        background-color: #36B37E!important;
    }
    .cookie-manager-tab-item .item-value .toggle-switch input:checked+.toggle-slider:before{
        -webkit-transform: translateX(26px);
        transform: translateX(26px);
        left: 0;
    }
    .cookie-manager-tab-item .item-value .toggle-switch .toggle-slider:before{
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 4px;
        background-color: #FFF;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    .cookie-manager-tab-item .item-value .toggle-text{
        position: relative;
        left: 60px;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
        min-width: 200px;
    }
    .cookie-manager-modal-foot{
        padding: 1rem;
        position: relative;
        left: 0;
        display: -webkit-flex;
        display: flex;
        border-top: 1px solid #EDEEF1;
        background: #F4F5F6;
        border-bottom-right-radius: 7.5px;
        border-bottom-left-radius: 7.5px;
    }
    .cookie-manager-tab-button{
        background-color: #FFF;
        cursor: pointer;
        padding: 13px 22px;
        font-weight: 500;
        font-size: 12px;
        margin-right: 8px;
        border-radius: 12px;
        line-height: 1;
        color: #000;
    }
    .cookie-manager-tab-button.primary{
        background-color: #C12A19;
        color: #FFF;
    }
    .cookie-manager-modal-close{
        position: absolute;
        right: -22px;
        top: -22px;
        width: 44px;
        height: 44px;
        border-radius: 100%;
        background: #F4F5F6;
        line-height: 44px;
        text-align: center;
        cursor: pointer;
        z-index: 99;
        -webkit-box-shadow: 1px 0 5px -1px rgba(0,0,0,.15);
        box-shadow: 1px 0 5px -1px rgba(0,0,0,.15);
    }
    .icon{
        fill: currentColor;
        display: inline-block;
        vertical-align: middle;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        line-height: 1;
    }
    .cookie-manager-modal-close .icon{
        font-size: 16px;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .icon-close:before{
        content: 'X';
    }
    .cookie-manager-modal-backdrop{
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        background: #000000b3;
        height: 100%;
    }

    @media (max-width: 1400px){
        .cookie-manager-bar{
            flex-direction: column;
        }
        .cookie-manager-bar p{
            margin-bottom: 15px;
        }
    }

    @media (max-width: 767px){
        .cookie-manager-modal-wrapper{
            flex-direction: column;
            align-items: center;
        }
        .cookie-manager-modal-panel,
        .cookie-manager-modal-content{
            flex: none;
            -ms-flex: none;
            max-width: 100%;
            width: 100%;
        }
    }

    @media (max-width: 480px){
        .cookie-manager-modal-wrapper{
            margin-inline: 20px;
        }
        .cookie-manager-modal-close{
            right: -12px;
        }
    }
</style>
`;

var cookieHTML = `
<div class="cookie-manager">
    <div class="cookie-manager-bar">
        <p>Size daha iyi hizmet sunabilmek için internet sitemizde çerez (cookie) kullanılmaktadır. Detaylı bilgi için Çerez Politikası’nı ve Kişisel Verilerin Korunması Hakkında Aydınlatma Metnini inceleyebilirsiniz.</p>
        <div class="cookie-manager-buttons">
            <div class="cookie-manager-button" id="customize">Kişiselleştir</div>
            <div class="cookie-manager-button primary" id="accept">Kabul Ediyorum</div>
        </div>
    </div>
    <div class="cookie-manager-modal" id="cookieModal">
        <div class="cookie-manager-modal-wrapper">
            <div class="cookie-manager-modal-panel">
                <h4>Çerez Ayarları</h4>
                <div class="cookie-manager-tab-title is-active" onclick="openTab('tab1', this)">Gerekli çerezler</div>
                <div class="cookie-manager-tab-title" onclick="openTab('tab2', this)">Performans çerezleri</div>
                <div class="cookie-manager-tab-title" onclick="openTab('tab3', this)">Reklam ve pazarlama çerezleri</div>
            </div>
            <div class="cookie-manager-modal-content">
                <div class="cookie-manager-tab-content">
                    <div class="cookie-manager-tab-item" id="tab1" style="display: block;">
                        <div class="item-title">Gerekli çerezler</div>
                        <div class="item-content">
                            <div class="item-text">
                                Zorunlu çerezler, internet sitesinin çalışması ve amaçlandığı gibi kullanılabilmesi için gerekli olan çerezlerdir. Zorunlu çerezlerin engellenmesi halinde, internet sitesinin bazı bölümleri çalışmayacaktır. Bu çerezler, güvenliği iyileştirme, aramaları kaydetme, oturum açma veya benzer işlevlerin kullanılmasına imkân tanır ve pazarlama faaliyetleri amacıyla kullanılmazlar.
                            </div>
                            <div class="item-value">
                                <label class="toggle-switch">
                                    <input type="checkbox" readonly checked disabled>
                                    <span class="toggle-slider disabled"></span>
                                    <span class="toggle-text">Aktif (Her zaman)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="cookie-manager-tab-item" id="tab2">
                        <div class="item-title">Performans çerezleri</div>
                        <div class="item-content">
                            <div class="item-text">
                                Performans çerezleri, web sitesinin geliştirilmesinde yardımcı olur. Kullanıcı deneyimini iyileştirmek amacıyla, sitenin ne şekilde ne kadar süre kullanıldığı gibi bilgileri toplar ve internet sitesini ziyaret eden kullanıcıların tercihlerine dayalı olarak site içeriğini onlar için bireyselleştirmeyi sağlar. Bu çerezlerin kullanımının engellenmesi mümkündür.
                            </div>
                            <div class="item-value">
                                <label class="toggle-switch">
                                    <input type="checkbox" checked id="popupCheckbox">
                                    <span class="toggle-slider"></span>
                                    <span class="toggle-text">Aktif (Her zaman)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="cookie-manager-tab-item" id="tab3">
                        <div class="item-title">Reklam ve pazarlama çerezleri</div>
                        <div class="item-content">
                            <div class="item-text">
                                Reklam çerezleri, kullanıcıların ilgi alanlarına göre ve onlara uygun içerikler ile reklamları sunmak amacıyla kullanılır. Çerezler yoluyla elde edilen bilgileri, aynı kişiye ait diğer verilerle eşleştirerek, ilgililere daha uygun içerikleri, kişiye özel kampanya ve ürünleri sunar ve daha önceden istenmediği belirtilen içerik veya fırsatları bir daha sunmaz. Bu çerezlerin kullanımının engellenmesi mümkündür.
                            </div>
                            <div class="item-value">
                                <label class="toggle-switch">
                                    <input type="checkbox" checked id="popupCheckbox2">
                                    <span class="toggle-slider"></span>
                                    <span class="toggle-text">Aktif (Her zaman)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cookie-manager-modal-foot">
                    <div class="cookie-manager-tab-button" id="save-customization">Ayarları kaydet</div>
                    <div class="cookie-manager-tab-button primary" onclick="acceptAllCookies()">Tümünü kabul et</div>
                </div>
                <div class="cookie-manager-modal-close" id="closePopup">
                    <span aria-label="icon-close" class="icon icon-close" data-size="medium" role="img"></span>
                </div>
            </div>
        </div>
        <div class="cookie-manager-modal-backdrop"></div>
    </div>
</div>
`;

var containerElement = document.getElementById('include-cookie');
containerElement.innerHTML = cookieStyle + cookieHTML;


var cookieBanner = document.querySelector(".cookie-manager");
var acceptBtn = document.getElementById("accept");
var customizeBtn = document.getElementById("customize");
var customizeModal = document.getElementById("cookieModal");
var saveCustomizationBtn = document.getElementById("save-customization");
var closePopupBtn = document.getElementById('closePopup');
var popupCheckbox = document.getElementById('popupCheckbox');

function closePopUp(){
    customizeModal.style.display = 'none';
}

closePopupBtn.addEventListener('click', function(){
    closePopUp();
});

function checkCookieConsent(){
    var cookiePolicy = getCookie("cookiePolicy");

    if (cookiePolicy === "true"){
        cookieBanner.style.display = "none";
    }
}

checkCookieConsent();

function setCookie(name, value, days){
    var expires = "";
    if (days){
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++){
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

acceptBtn.addEventListener("click", function(){
    setCookie("cookiePolicy", "true", 365);
    setCookie("performanceCookies", "true", 365);
    setCookie("advertisingCookies", "true", 365);

    cookieBanner.style.display = "none";
});

customizeBtn.addEventListener("click", function(){
    customizeModal.style.display = "flex";
});

window.onload = function(){
    document.getElementById('tab1').style.display = 'block';
    checkCookieConsent();
};

function openTab(tabId, clickedTab){
    var tabContents = document.getElementsByClassName('cookie-manager-tab-item');
    for (var i = 0; i < tabContents.length; i++){
        tabContents[i].style.display = 'none';
    }

    var tabs = document.getElementsByClassName('cookie-manager-tab-title');
    for (var i = 0; i < tabs.length; i++){
        tabs[i].classList.remove('is-active');
    }

    clickedTab.classList.add('is-active');

    document.getElementById(tabId).style.display = 'block';
}

function acceptAllCookies(){
    setCookie("cookiePolicy", "true", 365);
    setCookie("performanceCookies", "true", 365);
    setCookie("advertisingCookies", "true", 365);

    cookieBanner.style.display = "none";
}

saveCustomizationBtn.addEventListener('click', function(){
    saveCheckboxStates();
    cookieBanner.style.display = "none";
    closePopUp();
});

function saveCheckboxStates(){
    setCookie("cookiePolicy", "true", 365);

    var performanceCheckbox = document.getElementById('popupCheckbox');
    var advertisingCheckbox = document.getElementById('popupCheckbox2');

    setCookie("performanceCookies", performanceCheckbox.checked ? "true" : "false", 365);
    setCookie("advertisingCookies", advertisingCheckbox.checked ? "true" : "false", 365);
}