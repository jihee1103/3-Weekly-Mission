import "./Option.css";

function Option({ className, src, optionName }) {
  return (
    <div className={className}>
      <img src={src} alt={optionName + " 아이콘"} />
      <span className="option-name">{optionName}</span>
    </div>
  );
}

export default Option;
