import { saveAs } from "file-saver";


function Title({page}) {
    const polishUrl = 'CV/Polish.pdf'
    const englishUrl = 'CV/English.pdf'
    
    const saveFile = (url, name) => {
        saveAs(
            url,
            name
        );
    };

    return (
        <div className='title'>
            <h1>Maciej<br></br> Imbierowicz</h1> 
            <p>a programmer</p>
            <button style={{fontSize: '1.3rem'}} className='cv-button btn btn-dark' onClick={()=>saveFile(polishUrl, 'PolishCV.pdf')}>Polish CV</button>
            <button style={{fontSize: '1.3rem'}} className='cv-button btn' onClick={()=>saveFile(englishUrl, 'EnglishCV.pdf')}>English CV</button>
        </div>
    )
};

export default Title;