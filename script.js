console.log('------------- # 4.1')

function log(a, b){
    if(a > b){
        return;
    }
    console.log(a);
    log(a + 1, b);
}
log(2, 5);

console.log('------------- # 4.2')

function log2(a, b){
    if(a === b) {
        console.log(a);
        return;
    } else if (a < b){
        console.log(a);
        log2(a + 1, b);
    } else {
        console.log(a);
        log2(a - 1, b);
    }
}
log2(2, 5);
log2(9, 5);

console.log('------------- # 5')

function currentTime() {
    let clock = document.getElementById('clock');
    let format = clock.getAttribute('data-format');
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    hh = (hh < 10) ? '0' + hh : hh;
    mm = (mm < 10) ? '0' + mm : mm;
    ss = (ss < 10) ? '0' + ss : ss;
    let full = hh + ':' + mm + ':' + ss;
    let short = hh + ':' + mm
    let time = '';
    format == 'full' ? time = full : time = short;
    clock.innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();

function clockFormat() {
    let clock = document.getElementById('clock');
    let format = clock.getAttribute('data-format');
    format == 'full' ? format = 'short' : format = 'full';
    clock.setAttribute('data-format', format);
}
