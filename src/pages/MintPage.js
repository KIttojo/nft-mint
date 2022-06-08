import logo from '../logo.svg';
import '../App.scss';

const MintPage = () => {
  return (
    <div className="App">
      <div className='card'>
        <div className='header'>
          <p className='logo'>Project name</p>
          <div className='nav-bar'>
            <span className='nav-item'>HOME</span>
            <span className='nav-item'>HOME</span>
            <span className='nav-item'>HOME</span>
          </div>
        </div>

        <div className='body'>
          <div className='left-content'>
            <h1 className='title'>Koala <span>Intelligence</span> Agency</h1>
            <p className='description'>
              A collection of 10,000 worldly Koalas each with their unique skillsets. Their mission is to protect the world from evil.
            </p>
            <div className='left-content-footer'>
              <button className='action-btn'>Connect wallet</button>
            </div>
          </div>
          <div className='nft-preview'></div>
        </div>
      </div>
    </div>
  );
}

export default MintPage;