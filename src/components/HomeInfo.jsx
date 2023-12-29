import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-bold mx-2 text-white'>Gonza</span>
        👋
        <br />
        Welcome to my Portfolio, <br/>
        go to the right to see more!
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='sm:text-xl text-center'>
        I like transforming ideas into data-driven realities using<br />
        <span className='font-bold mx-2 text-white'> AI, Data Visualizations & Orchestrations</span>
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Work Experience
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='text-center sm:text-xl'>
        <span className='font-bold mx-2 text-white'>Explore my projects.</span> 🚀 <br />
          Be carefoul curious minds
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='sm:text-xl text-center'>
        <span className='font-bold mx-2 text-white'>Ready to kick off your project?</span><br/>
        I'm just a message away, reach out!
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Contact
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;