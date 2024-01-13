import './style.css';

function AddLink() {
  return (
    <form className="form add-link__form">
      <div className="input-container">
        <img className="link-icon" width="20" src="/link.svg" />
        <label htmlFor="input-link" />
        <input
          className="input add-link__input"
          id="input-link"
          placeholder="링크를 추가해 보세요"
          name="addLinkData"
        />
        <button className="addLink__btn-add">추가하기</button>
      </div>
    </form>
  );
}

export default AddLink;
