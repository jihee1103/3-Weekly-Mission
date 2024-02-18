import styles from "./LinkAdd.module.css";

export default function LinkAdd() {

  return (
    <div className="link_Add_Area">
      <form className="link_Add_Box">
        <input type="text" placeholder="링크를 추가해 보세요" />
        <img className="link_svg" src="/image/link.svg" alt="link" />
        <button className="link_Add_Button">
          추가하기
        </button>
      </form>
    </div>
  );
}
