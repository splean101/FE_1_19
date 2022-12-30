//1.

// let userAge = Number(prompt('Please enter your age!', 'your age'));
// if(userAge <= 17){
//   confirm('Do you study at school?')
// } else if (userAge > 17 && userAge < 25){
//   confirm('Do you study at university?')
// } else if (userAge >= 25 && userAge < 60){
//   confirm('Do you have a job?')
// } else {
//   confirm('What are you doing?')
// }

//2.

let display = prompt(
  'Enter the display value',
  'block, flex, grid, inline or none'
);

switch (display) {
  case 'block':
    alert('block');
    break;
  case 'flex':
    alert('flex');
    break;
  case 'grid':
    alert('grid');
    break;
  case 'inline':
    alert('inline');
    break;
  case 'none':
    alert('none');
    break;
  default:
    alert("Set 'display: inline-block'");
}
//3.

//4.
