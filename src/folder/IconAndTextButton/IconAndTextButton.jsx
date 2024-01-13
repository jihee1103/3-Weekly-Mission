export const IconAndTextButton = (iconSourcon, text) => {
  return (
    <button className="Container">
      <img className="Icon" src={iconSourcon} alt={`${text} 아이콘`} />
      <span className="Text">{text}</span>
    </button>
  );
};
