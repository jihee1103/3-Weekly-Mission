import Profile from './Profile'
import Bookmark from './Bookmark'
import logo from '../image/logo.svg';
import './Header.css';

export default function Header() {
  
  return (
    <div className='headerArea'>
      <div className='nav'>
        <img src={logo} alt='logo' />
        <Profile/>
      </div>
      <Bookmark/>
    </div>
  )
}
{/* <>
<div className='nav'>
<Profile/>
</div>
<div className='headerArea'>
<Bookmark/>
</div>
</>
//이런식으로 nav와 headerArea를 분리 */}