import './App.module.scss';
import { Header } from './Sections/Header';
import { Main } from './Sections/Main';
import { Container } from './Components/Container';
import { AboutCourse } from './Sections/About-course';
import { CourseFor } from './Sections/Course-for';
import { Autors } from './Sections/Course-authors';
import { Details } from './Sections/Program-details';
import { Reviews } from './Sections/Reviews';
import { Registration } from './Sections/Registration';
import { ToBuy } from './Sections/ToBuy';
import { Learn } from './Sections/Learn';
import { Footer } from './Sections/Footer';

function App() {
  return (
    <Container>
      <Header/>
      <Main/>
      <AboutCourse/>
      <CourseFor/>
      <Autors/>
      <Details/>
      <Reviews/>
      <Registration/>
      <ToBuy/>
      <Learn/>
      <Footer/>
    </Container>
  );
}
export default App;
