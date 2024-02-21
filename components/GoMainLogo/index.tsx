import Image from "next/image";
import Link from "next/link";
import linkbrary from "./linkbrary.svg";

const GoMainLogo = () => {
  return (
    <Link href="/">
      <Image
        src={linkbrary}
        width={133}
        height={24}
        alt="linkbrary 로고 이미지"
      />
    </Link>
  );
};

export default GoMainLogo;
