import './styles.css';
import '../src/js/templating';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeRef = document.querySelector('#theme-switch-toggle');
themeRef.addEventListener('change', changeTheme);
// document.body.classList.add(Theme['LIGHT']);

if (localStorage.getItem('Theme')) {
  document.body.classList.add((Theme['DARK']));
}
function changeTheme(event) {
  // document.body.classList.toggle(Theme['LIGHT']); 
  // document.body.classList.toggle(Theme['DARK']);

  //  if (event.target.checked) {
  //    localStorage.setItem('Theme', (Theme['DARK'])); 
  //    document.body.classList.add(Theme['DARK']);
  //    localStorage.removeItem('Theme', (Theme['LIGHT']));
  //    document.body.classList.remove(Theme['LIGHT']);
  // } else {
  //    localStorage.setItem('Theme', (Theme['LIGHT'])); 
  //    document.body.classList.add(Theme['LIGHT']);
  //    localStorage.removeItem('Theme', (Theme['DARK'])); 
  //    document.body.classList.remove(Theme['DARK']);
  // }

  if (document.body.classList.contains(Theme['DARK'])) {
    document.body.classList.add(Theme['LIGHT']);
    localStorage.removeItem('Theme', (Theme['DARK']));
    document.body.classList.remove(Theme['DARK']);
     
  } else {
     event.target.checked = 'true';
    localStorage.setItem('Theme', (Theme['DARK']));
    document.body.classList.add(Theme['DARK']);
    document.body.classList.remove(Theme['LIGHT']);
  };
  console.log(event.target.checked);
  // if (document.body.classList.contains(Theme['DARK'])) {
  //   document.body.classList.add(Theme['DARK']);
  // } else {
  //   document.body.classList.add(Theme['LIGHT']);
  // };
}; 