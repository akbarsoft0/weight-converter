document.querySelectorAll('[data-value]').forEach(element => {
    element.innerHTML = '0';
});

let wBtn = document.querySelector('#wBtn'),
    metrics = document.querySelector('.metrics'),
    input = document.querySelector('#input');

wBtn.addEventListener('click', function (e) {
    let g = input.value;

    //metric units
    document.querySelector('.pg').innerHTML = g * (10 ** 12);
    document.querySelector('.ng').innerHTML = g * (10 ** 9);
    document.querySelector('.mcg').innerHTML = g * (10 ** 6);
    document.querySelector('.mg').innerHTML = g * (10 ** 3);
    document.querySelector('.ct').innerHTML = g * (5);
    document.querySelector('.g').innerHTML = g;
    document.querySelector('.kg').innerHTML = g / (10 ** 3);
    document.querySelector('.q').innerHTML = g / (10 ** 5);
    document.querySelector('.t').innerHTML = g / (10 ** 6);
    document.querySelector('.kt').innerHTML = g / (10 ** 9);
    document.querySelector('.mt').innerHTML = g / (10 ** 12);
    document.querySelector('.gt').innerHTML = g / (10 ** 15);


    //imperial units
    document.querySelector('.gr').innerHTML = g * 15.4323583529;
    document.querySelector('.dr').innerHTML = g * 0.5643833912;
    document.querySelector('.oz').innerHTML = g * 0.0352739619;
    document.querySelector('.lb').innerHTML = g * 0.0022046226;
    document.querySelector('.st').innerHTML = g * 0.000157473;
    document.querySelector('.sh-cwt').innerHTML = g * 0.0000220462;
    document.querySelector('.lg-cwt').innerHTML = g * 0.0000196841;
    document.querySelector('.st-ton').innerHTML = g * 0.0000011023;
    document.querySelector('.lt-ton').innerHTML = g * 9.842E-7;

    //chinese units
    document.querySelector('.dan').innerHTML = g * 0.00002;
    document.querySelector('.jin').innerHTML = g * 0.002;
    document.querySelector('.liang').innerHTML = g * 0.02;
    document.querySelector('.qian').innerHTML = g * 0.2;
})

