import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>Home page</div>
      <div>
        <Link to="/shared">Shared page</Link>
      </div>
      <div>
        <Link to="/folder">Folder page</Link>
      </div>
    </div>
  );
}
