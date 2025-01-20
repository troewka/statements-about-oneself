import './App.css';

import { Buttons } from './Components/Button';
import { Menu } from './Components/Menu';
import { Icon } from './Components/Icon';
import { SocialIcon } from './Components/Social-icon';
import { HeadLine } from './Components/Head-line';
import { Description } from './Components/Description';
import { Title } from './Components/Title';
import { List } from './Components/List';

function App() {

  return (
  <div className="App">
    <h1>Gilroy Fonts Test</h1>
    <h2 className='text'>Celestina Fonts Test</h2>
    <Buttons label = {'Реєстрація'} theme = 'transparent'/>
    <Buttons label = {'Зареєструйся зараз!'} theme = 'green'/>
    <Menu/>
    <div className="icon-wrap">
      <Icon name='calendar' size='small'/>
      <Icon name='like' size='middle'/>
      <Icon name='recommendations' size='middle'/>
      <Icon name='arrowLarge' size='large'/>
    </div>
    <div className='social-icon-wrap'>
      <SocialIcon name='facebookBlue'/>
      <SocialIcon name='instagramGreen'/>
      <SocialIcon name='linkedinBlue'/>
    </div>
    <HeadLine text='Авторки курсу' letters={['и', 'у']}/>
    <Description texts={['експертка з управління репутацією та social impact комунікацій.', 'Маючи понад 15 років досвіду, зараз займає посади CEO комунікаціної агенції OII Meaningful Communication та НГО Impact Force.']}/>  
    <Title text='Що ти отримаєш?' color='#93bccc' size='M'/>
    <Title text='Алеся Стоковська' color='#b0d283' size='XXL'/>
    <Title text='Є питання? Напиши нам' color='#0e2129' size='XL'/>
    <List name='arrowLongGreen' text='Самооцінка та постановка цілей; подолання обмежуючих переконань.' title='Модуль 1:'/>
    <List name='arrowLongWhite' text='Тих, хто хоче більшого: підвищення, вищої зарплати, визнання'/>
  </div>
  );
}

export default App;
