// $('.carousel').carousel({
//     interval: 4000
//     })

// class Options {
//     constructor(elem) {
//       this._elem = elem;
//       elem.onclick = this.onClick.bind(this);
//     }

//     byName() {
//     let myarray = getElementById(nav-home);

//     myarray.sort(function(a,b){
//         return b - a;
//     }

//     fromLowtoHight() {

//     }

//     fromHighttoLow() {

//     }

//     onClick(event) {
//       let action = event.target.dataset.action;
//       if (action) {
//         this[action]();
//       }
//     };
//   }

//   new Options(options);

document.getElementById("byName").addEventListener("click", sortCards);

function sortCards() {
    let array = document.querySelectorAll('.card-deck .card');
    arr = Array.from(array);
    console.log('array ',  array);
    console.log('frist value ', array[0].dataset );
    console.log('arr ', arr );
    array[0].style.transform = 'rotate(20deg)';




array.sort(function(a, b)
{
    return a - b;
});

alert(numbers);

}
