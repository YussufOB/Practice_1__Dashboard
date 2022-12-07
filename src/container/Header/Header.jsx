
import './Header.css';
import { meeting } from '../../assets';
import Button from '../../components/Button';

const Header = () => (
  <div className='app__header'>
    <div className='app__header-wrapper'>
      <img src={meeting} alt='meeting' />
      <div className='app__header-wrapper overlay' />
      <div className='app__header-wrapper content'>
        <h1>Managing your tasks made easy!</h1>
        <Button title='Sign-Up' className='header_button' />
        <p>Welcome to Ta Ski, where you can easily manage projects, keep tracks of your work and have 100% control over your projects for free!</p>
        
      </div>
    </div>
  </div>
);

export default Header;