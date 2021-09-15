var imgs = document.getElementById('imgs');

var img = document.querySelectorAll('#imgs img');

var idx = 0;

function run(){
    idx++;
    if(idx > img.length - 2){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 400}px)`
    console.log(idx)
}

setInterval(run,2500)