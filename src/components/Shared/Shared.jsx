import SharedBody from './SharedBody';
import SharedInfo from './SharedInfo';
import Navbar from '../Navbar/Navbar';

export default function Shared() {
  return (
    <>
      <Navbar />
      <SharedInfo />
      <SharedBody />
    </>
  );
}
