import './styles.css';
import '../src/js/templating';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeRef = document.querySelector('#theme-switch-toggle');
themeRef.addEventListener('change', handleThemeInput);

document.body.classList.add(Theme['LIGHT']);

function handleThemeInput(event) {
    document.body.classList.toggle(Theme['LIGHT']); 
    document.body.classList.toggle(Theme['DARK']);
  
    localStorage.setItem('Theme', Theme['LIGHT']); 
    if (event.target.checked) {
        event.preventDefault();
     localStorage.setItem('Theme', Theme['DARK']);    
    } 
};
 
