import './App.css';
import { Buttons } from './Components/Button';
import { Menu } from './Components/Menu';
import { Icons } from './Components/Icons';

function App() {

  return (
    <div className="App">
      <h1>Some text!!!</h1>
      <Buttons label = {'Реєстрація'} theme = 'green'/>
      <Buttons label = {'Ре'}/>
      <Menu/>
      <div className="iconWrap">
        <Icons name = 'calendar' theme = 'smallCircle'/>
        <Icons name = 'like' theme = 'middleCircle'/>
        <Icons name = 'recommendations' theme='middleCircle'/>
        <Icons name = 'arrowSmall' theme='bigCircle'/>
      </div>

    </div>
  );
}

export default App;
