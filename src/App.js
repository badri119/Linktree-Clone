import {AiFillGithub} from'react-icons/ai';
import {AiFillLinkedin} from'react-icons/ai';
import {AiFillYoutube} from'react-icons/ai';
import {AiFillTwitterCircle} from'react-icons/ai';

import pic from './profile.png'
import './App.css';
function App() {
  const links = [
    {
      id: 1,
      child: (
        <>
        
        </>
      ),
      href: "https://www.linkedin.com",
      text:'LinkedIn',
      link: "https://www.linkedin.com",
      img: (
        <>
        <AiFillLinkedin size={50}/>
        </>
      ),
  
  
    },
    {
      id: 2,
      child: (
        <>
        </>
      ),
      href: "https://github.com",
      text:'GitHub',
      link: "https://github.com",
      img: (
        <>
        <AiFillGithub size={50}/>
        </>
      ),
    },
    {
      id: 3,
      child: (
        <>
        </>
      ),
      href: "https://www.youtube.com",
      text:'YouTube',
      link: "https://www.youtube.com",
      img: (
        <>
        <AiFillYoutube size={50}/>
        </>
      ),
    },
    
    {
      id: 3,
      child: (
        <>
        </>
      ),
      href: "https://twitter.com",
      text:'Twitter',
      link: "https://twitter.com",
      img: (
        <>
        <AiFillTwitterCircle size={50}/>
        </>
      ),
    },

];
  return (

  <body>
    <header>
    </header>
    <div className='container'>
      <div className='image-container'>
        <img src={pic} alt='profile'/>

      </div>
      <h1>John Doe</h1>

      {links.map(({ id, child, href, text, img, link }) => (

      <a className='tile'  href={href} key={id} target="_blank"
      rel="noreferrer">
        <div className='icon'>{img} </div>
        <p>{text}</p>
        <div className='tile-share' link={link} >
        <svg width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 24 24" class="sc-gKsewC iPWGYb"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z" fill="currentColor"></path></svg>
        </div>
        {child}
      </a>
      ))}

    </div>
 {/* <script src='Share.js'></script> */}
  </body>
  );
}

export default App;
