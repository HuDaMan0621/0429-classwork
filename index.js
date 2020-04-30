
// const dogButton = document.getElementById('dog-button');

// dogButton.addEventListener('click', function(){
//     dogButton.textContent = "Generating Doggo...";
//     $.get(urls)
//     new Promise(function(resolve, reject) {

//         setTimeout(() => resolve(1), 1000); // (*)
      
//       }).then(function(result) { // (**)
      
//         alert(result); // 1
//         return result * 2;
      
//       }).then(function(result) { // (***)
      
//         alert(result); // 2
//         return result * 2;
      
//       }).then(function(result) {
      
//         alert(result); // 4
//         return result * 2;
      
//       });
        
//         dogButton.textContent = 'Generate Doggo';
// });
// });

const fetchDogs = document.getElementById('dog-button');

fetchDogs.addEventListener('click', function(){
    dogButton.textContent = "Generating Doggo...";

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });

}).then(function(result) { // (**)
  
        alert(result); // 1
        return result * 2;
      
      }).then(function(result) { // (***)
      
        alert(result); // 2
        return result * 2;
      
      }).then(function(result) {
      
        alert(result); // 4
        return result * 2;
      
      });

 
//   new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     alert(result); // 1
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     alert(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     alert(result); // 4
//     return result * 2;
  
//   });