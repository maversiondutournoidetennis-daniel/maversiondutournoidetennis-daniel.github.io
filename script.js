var menubutton = document.getElementById('menu-button');
/*var lines = document.getElementsByClassName('line-menu');*/
var bar1 = document.getElementById('bar1');
var bar2 = document.getElementById('bar2');
var bar3 = document.getElementById('bar3');
var vague = document.getElementById('Vague');
var link = document.getElementsByClassName('link-menu');
var items = document.querySelectorAll('img');
var finale = document.getElementById('finale');
var video = document.getElementById('match-en-cours');
var nb_slides = items.length;
console.log(link)
menubutton.addEventListener('click', () => {
    if(menubutton.className === 'active') {
        menubutton.className = '';
        bar1.className = '';
        bar2.className = '';
        bar3.className = '';
        vague.className = '';
        link.className = 'link-menu';
        for(var i = 0; i<link.length; i++){
            link[i].className = 'link-menu'
        }
    } else {
        menubutton.className = 'active';
        bar1.className = 'dorotate';
        bar2.className = 'dorotate';
        bar3.className = 'dorotate';
        vague.className = 'activation';
        for(var i = 0; i<link.length; i++){
            link[i].className = 'link-menu viens'
        }
    }
});
finale.addEventListener('mouseover', () => {
    if(finale.className === 'hove'){
        finale.className = '';
        video.className = 'truc';
    }
    else{
        finale.className = 'hove';
        video.className = '';
    }
});