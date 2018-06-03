function dropdown() {
    'use strict';
    if (document.getElementById("dropdown-main").classList == ('dropdown-content')) {
        document.getElementById('dropdown-main').classList.add("show");
        document.getElementById('dropdownbutton').innerHTML = "Close";
    } else {
        document.getElementById('dropdown-main').classList.remove("show");
        document.getElementById('dropdownbutton').innerHTML = "&equiv; Menu";
    }
}


//Created by infinitytec for Parchment2. Inspired by the W3Schools JS dropdown script tutorial, but recoded to meet my needs better.
