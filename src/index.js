import './styles.css';
import '../src/js/templating';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeRef = document.querySelector('#theme-switch-toggle');
themeRef.addEventListener('change', changeTheme);

if (localStorage.getItem('Theme', (Theme['DARK']))) {
  document.body.classList.add((Theme['DARK']));
} else {
  localStorage.setItem('Theme', (Theme['LIGHT']));
};

function changeTheme(event) {
  if (document.body.classList.contains(Theme['DARK'])) {
    document.body.classList.add(Theme['LIGHT']);
    localStorage.removeItem('Theme', (Theme['DARK']));
    document.body.classList.remove(Theme['DARK']);
    // localStorage.setItem('Theme', (Theme['LIGHT'])); 
  } else {
     event.target.checked = true;
    localStorage.setItem('Theme',(Theme['DARK']));
    document.body.classList.add(Theme['DARK']);
    document.body.classList.remove(Theme['LIGHT']);
    // localStorage.removeItem('Theme',(Theme['LIGHT']));
  };
  };
 