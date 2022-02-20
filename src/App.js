
import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Modal from 'react-awesome-modal';
import Title from './Title';
import Navbar from './Navbar';
import Information from './Information';




function App() {
  const [page, setPage] = useState('');
  const [isPopup, setIsPopup] = useState(false);
  
  const changePage = (pageName) => {
      setPage(pageName);
  }

  const showPopup = () =>{
    setIsPopup(!isPopup);
  }

  const closePopup = () => {
    setIsPopup(!isPopup);
    setPage('');
  }

    useEffect(()=> {
      if (page) {
        showPopup();
      }
    },[page]);
    
  return (<main className='outer-page'>
      <Navbar changePage={changePage}/>
      <div className='inner-page'>
      <Title />
      </div>
      <Modal visible={isPopup} effect="fadeInUp" onClickAway={closePopup}>
          <div className='popup'>
              <Information page={page} />
          </div>
      </Modal>
    </main>    
  );
}

export default App;



