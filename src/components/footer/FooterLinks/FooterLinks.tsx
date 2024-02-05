import Sns from '../Sns/Sns';
import LinkString from '../LinkString/LinkString';
import './FooterLinks.css';
import { LinkHTMLAttributes } from 'react';

interface Props {
  target: string;
  rel: string;
}

export default function FooterLinks({ target, rel }: Props) {
  return (
    <>
      <LinkString className="footer-links" />
      <Sns className="sns" target={target} rel={rel} />
    </>
  );
}
