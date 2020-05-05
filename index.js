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

document.getElementById("byName").addEventListener("click", myFunction);

function sortCards() {
let array = [document.getElementById(first-card).value, document.getElementById(second-card).value, document.getElementById(third-card).value, document.getElementById(forth-card).value, document.getElementById(fifth-card).value, document.getElementById(six-card).value]
   
array.sort(function(a, b)
{
    return a - b;	
});
    
alert(numbers);

}