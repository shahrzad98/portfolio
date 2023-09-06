import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import {styles} from "./styles.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
          <div
              className="flex flex-row w-[100%] my-10 justify-center  px-12">
            <p className={styles.sectionSubText}>
              Contact Number: &nbsp;
            </p>
            <div className='cursor-pointer' onClick={()=>
                window.open("tel:900300400")}>
              <p className={styles.sectionSubText}>00989127766194 </p>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
