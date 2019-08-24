// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});


//Prevent default behavior, e.g. receiving key 'g'

input.addEventListener('keydown', function(e){
  if (e.which === 71) {
    console.log('Default prevened');
    return e.preventDefault()
  } else {
    console.log('Not a "g"')
  }
});