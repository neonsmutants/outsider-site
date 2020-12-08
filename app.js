const nbFlipImages = 500;
var nbLoaded = 0;
const loadbarWidth = 200;

function load(i) {

    let img = new Image();
    let id = "i"+i;
    img.setAttribute("id", id);

    img.addEventListener('load', function(e) {

        nbLoaded ++;
        document.getElementById('flipbook').appendChild(img);

        let percent = nbLoaded / nbFlipImages;
        $('#loadbar').css({width: percent * loadbarWidth});

        //-> images loaded

        if(i == nbFlipImages) {
            $('#preloader').hide();
        }
    }, false);
    
    img.src = "assets/img/flipbook/out-site-export_"+i+".jpg";
}

for (let i = 0; i < nbFlipImages; i++) {
    load(i);  
}


function flip(e){
    var currentImg = Math.floor((e.pageX / window.innerWidth) * nbFlipImages);
    $('#flipbook').children().hide();
    $('#flipbook #i'+ currentImg).show();
}

//window.addEventListener('mousemove', flip);


