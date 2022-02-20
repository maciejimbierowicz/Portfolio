import ImageSlider from './Slider';
import {FaGithubSquare, FaPhoneSquareAlt} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'

function Information({page}) {
    if (page === 'about') {
        return <div className='info'>
            <h1>About me</h1>
            <p id='about-me'>A graduate of Management and Production Engineering. At the beginning of 2021, I became interested in the subject of
                programming. Using the information obtained on the Internet, I created some of my own applications in Python. I
                systematically expanded my knowledge, learning new languages and technologies such as JavaScript or HTML with CSS. 
                Suddenly programming became a very important part of my life and I realised that I want to continue this journey on a
                professional level. That's why I started looking for my first job as a programmer. </p>                
        </div>
    } else if (page === 'contact') {
        return <div className='info'>
            <h1>Contact</h1>
                <br></br>
                <FaGithubSquare className='icon'/>
                <p><a href='https://github.com/maciejimbierowicz'>GitHub Profile</a></p> 
                <br></br>
                <FiMail className='icon'/>
                <p>imbierowicz.maciej@gmail.com</p> 
                <br></br>
                <FaPhoneSquareAlt className='icon'/>
                <p>+48534417893</p>               
        </div>
    } else if (page === 'projects') {
        return  <div className='info'>
        <ImageSlider />
        </div>
    } else {
        return <></>
    }
}

export default Information;