// ==UserScript==
// @name Banco Inter Home Broker
// @namespace https://github.com/eduardodaluz/banco-inter-home-broker
// @version 0.1
// @description Prevents Inter Bank's Home Broker to close session.
// @author Carimbador
// @license MIT; https://raw.githubusercontent.com/eduardodaluz/banco-inter-home-broker/master/LICENSE
// @icon https://raw.githubusercontent.com/eduardodaluz/banco-inter-home-broker/master/banco-inter-home-broker-icon.jpg
// @match https://home-broker.bancointer.com.br/hbnet2/hbweb2/Default.aspx
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        var mouseMoveEvent = document.createEvent("MouseEvents");

        mouseMoveEvent.initMouseEvent(
            "mousemove", //event type : click, mousedown, mouseup, mouseover, mousemove, mouseout.
            true, //canBubble
            false, //cancelable
            window, //event's AbstractView : should be window
            1, // detail : Event's mouse click count
            50, // screenX
            50, // screenY
            50, // clientX
            50, // clientY
            false, // ctrlKey
            false, // altKey
            false, // shiftKey
            false, // metaKey
            0, // button : 0 = click, 1 = middle button, 2 = right button
            null // relatedTarget : Only used with some event types (e.g. mouseover and mouseout). In other cases, pass null.
        );

        document.dispatchEvent(mouseMoveEvent)
    }, 10000)
})();
