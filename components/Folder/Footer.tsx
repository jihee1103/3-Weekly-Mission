import Link from "next/link";
import Image from "next/image";
import * as S from "./Style";

export default function Footer() {
  return (
    <S.Footer>
      <S.Copyright>@codeit - 2023</S.Copyright>
      <S.FooterLinkBox>
        <S.FooterLink href="/">Privacy Policy</S.FooterLink>
        <S.FooterLink href="/">FAQ</S.FooterLink>
      </S.FooterLinkBox>
      <S.SNS>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/assets/Icons/facebook.svg"}
            width={20}
            height={20}
            alt="페이스북 아이콘 이미지"
          />
        </Link>
        <Link
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/assets/Icons/twitter.svg"}
            width={20}
            height={20}
            alt="트위터 아이콘 이미지"
          />
        </Link>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/assets/Icons/youtube.svg"}
            width={20}
            height={20}
            alt="유튜브 아이콘 이미지"
          />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/assets/Icons/instagram.svg"}
            width={20}
            height={20}
            alt="인스타그램 아이콘 이미지"
          />
        </Link>
      </S.SNS>
    </S.Footer>
  );
}
