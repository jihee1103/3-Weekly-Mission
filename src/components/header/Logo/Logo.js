import { Link } from 'react-router-dom';

function Logo({value}) {
  const src = value
  
  return (
    <div className="Logo">
      <Link to="/"><img src={src} alt={value} /></Link>
    </div>
  )
}

export default Logo;