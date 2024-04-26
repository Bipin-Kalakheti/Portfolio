import {Link} from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-B.png'
import './index.scss';



const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm 
                <img src={LogoTitle} alt="developer" />
                ipin
                <br />
                web developer
                </h1>
                <h2> Frontend Developer / Python Developer / Gamer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>

            </div>
        </div>
    )
}


export default Home