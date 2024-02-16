import Input from '../components/input/Input';
import HomeBody from './components/HomeBody';

export default function Home() {
  return (
    <div>
      <HomeBody />
      <Input type="text" />
      <Input type="password" />
    </div>
  );
}
