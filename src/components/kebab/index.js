import './style.css';

function Kebab(disabled) {
  return (
    <div disabled={disabled} className="kebab-btn">
      <button className="kebab-delete-btn">삭제하기</button>
      <button className="kebab-add-btn">폴더에 추가</button>
    </div>
  );
}

export default Kebab;
