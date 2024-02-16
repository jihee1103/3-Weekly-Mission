import Nav from "./Nav";
import LinkAddInput from "./LinkAddInput";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <Nav />
      <LinkAddInput />
    </header>
  );
}
