
function Navbar({changePage}) {
    
    return ( <nav>
        <img className='logo' src='Logo.png' alt='logo' />
        <p></p>
        <ul>
            <li><button className='btn' onClick={()=> changePage('about')}>about me</button></li>
            <li><button className='btn' onClick={()=> changePage('projects')}>projects</button></li>
            <li><button className='btn' onClick={()=> changePage('contact')}>contact</button></li>
        </ul>
    </nav>)
};

export default Navbar;