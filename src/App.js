import './App.css';
import Steps from './components/Steps'

function App() {
  
  return (
    <main>
      <picture>
        <source srcSet='./assets/images/bg-sidebar-desktop.svg' media='(min-width:375px)' alt="colorful background" />
        <img src='./assets/images/bg-sidebar-mobile.svg' alt="colorful background" />
      </picture>
      <Steps />
    </main>
    
  );
}

export default App;
