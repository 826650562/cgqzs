/**
 * Created by Administrator on 2019/6/15.
 */

var ticks = $('.tick');
var ticks1 = $('.tick1');
var digits = $('.digit');
var digits1 = $('.digit1');
var details = $('.details');
var progress = $('.progress');

var outerRingRadius =100;
var digitRingRadius = 80;

ticks.each(function (i) {
    var angle = 210 - i * 5;
    var theta = deg2rad(angle);
    var radius = outerRingRadius + (i % 6 ? 0 : 4);
    var x = Math.cos(theta) * radius;
    var y = Math.sin(theta) * -radius;
    var transform = [
        `translate(${x}px, ${y}px)`,
        `rotate(${-angle}deg)`].
    join(' ');
    $(this).css({
        '-webkit-transform': transform,
        '-moz-transform': transform,
        'transform': transform });

});

ticks1.each(function (i) {
    var angle = 210 - i * 5;
    var theta = deg2rad(angle);
    var radius = outerRingRadius + (i % 6 ? 0 : 4);
    var x = Math.cos(theta) * radius;
    var y = Math.sin(theta) * -radius;
    var transform = [
        `translate(${x}px, ${y}px)`,
        `rotate(${-angle}deg)`].
    join(' ');
    $(this).css({
        '-webkit-transform': transform,
        '-moz-transform': transform,
        'transform': transform });

});

digits.each(function (i) {
    var angle = 210 - i * 30;
    var theta = deg2rad(angle);
    var x = Math.cos(theta) * digitRingRadius;
    var y = Math.sin(theta) * -digitRingRadius;
    $(this).css({
        '-webkit-transform': `translate(${x}px, ${y}px)`,
        '-moz-transform': `translate(${x}px, ${y}px)`,
        'transform': `translate(${x}px, ${y}px)` });

});
digits1.each(function (i) {
    var angle = 210 - i * 30;
    var theta = deg2rad(angle);
    var x = Math.cos(theta) * digitRingRadius;
    var y = Math.sin(theta) * -digitRingRadius;
    $(this).css({
        '-webkit-transform': `translate(${x}px, ${y}px)`,
        '-moz-transform': `translate(${x}px, ${y}px)`,
        'transform': `translate(${x}px, ${y}px)` });

});

$('.retry-button').on('click', function () {
    statValueMax=120
    statValueCurrent = 0;
    updateDetails();
});


var frameCount = 100;
var frameInterval = 0.3;
var digitValueMax = 160;
var statValueMax = 10;
var statValueCurrent = 0;
var statValueInterval = statValueMax / frameCount;

updateDetails();

function updateDetails() {
    if (statValueCurrent.toFixed(1) > statValueMax) {
        return;
    }
    setStatValue(statValueCurrent.toFixed(1));
    statValueCurrent += statValueInterval;
    setTimeout(updateDetails, frameInterval);
}
function setStatValue(value) {
    var angle = -120 + 240 * (value / digitValueMax);
    progress.css({
        'transform': `rotate(${angle}deg)` });

    details.find('.speed').text(value);
}
function deg2rad(angle) {
    return angle * (Math.PI / 180);
}
function rad2deg(angle) {
    return angle * (180 / Math.PI);
}
