/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"img"> {
  name: string;
}

export default function EyeIcon({ name, ...props }: Props) {
  return <img src={"/assets/Icons/eye-off.svg"} alt="눈 닫은 아이콘 이미지" />;
}
