import "./IconAndTextButton.css";

export const IconAndTextButton = ({ iconSource, text }) => {
  return (
    <button className="IconAndTextButton">
      <img className="Icon" src={iconSource} alt={`${text} 아이콘`} />
      <span className="Text">{text}</span>
    </button>
  );
};
