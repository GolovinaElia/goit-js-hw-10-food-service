import './styles.css';
import '../src/js/templating';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeRef = document.querySelector('#theme-switch-toggle');
const currentTheme = localStorage.getItem('Theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
};
if (currentTheme === Theme.dark) {
    checkBox.checked = true;
};

themeRef.addEventListener('change', (event) => {
    if (event.target.checked) {
        document.body.classList.remove(Theme['LIGHT']);
        localStorage.setItem('Theme',(Theme['DARK']));
      document.body.classList.add(localStorage.getItem('Theme'));
      
    } else {
        document.body.classList.remove(Theme['DARK']);
        localStorage.setItem('Theme', (Theme['LIGHT']));
        document.body.classList.add(localStorage.getItem('Theme'));
  };
});