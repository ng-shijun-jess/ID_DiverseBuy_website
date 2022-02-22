// START OF JESS JAVASCRIPT
$('.nav ul li').click(function() {
    $(this).addClass("active").siblings().removeClass("active");
})

const tabBtn = document.querySelectorAll('.nav ul li');
const tab = document.querySelectorAll('.tab');
function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = 'none';
    });
    tab[panelIndex].style.display  = 'block';
}
tabs(0);

function increment() {
    document.getElementById('demoInput').stepUp();
 }
 function decrement() {
    document.getElementById('demoInput').stepDown();
 }

// END OF JESS JAVASCRIPT

 