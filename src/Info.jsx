import anurag from './assets/anurag.jpg'
import './info.css';

export default function Info() {
    return (
        <>
            <div className='business-card-header'>
                <img src={anurag} alt='anurag jaiswal' />
                <h1>Anurag Jaiswal</h1>
                <h3>Full Stack Developer</h3>
                <div className='business-card-portfolio'>
                    <a href='https://anuragjaiswal12.netlify.app'>Portfolio</a>
                </div>
                <div className='business-card-social-link'>
                    <a href='mailto:anurag.d.j174414@gmail.com' className='btn btn-light social-link'><i class="fa-solid fa-envelope"></i> E-Mail</a>
                    <a href='https://www.linkedin.com/in/anuragjaiswal12/' className='btn btn-primary social-link'><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                </div>
            </div>
        </>
    );
}