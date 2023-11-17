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