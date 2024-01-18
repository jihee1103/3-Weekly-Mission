
export function Button({folder, onClick}) {
  const handleClick = () => onClick(folder)
  return (
    <button onClick={handleClick} className="button">{folder.name}</button>
  )
}

export function Buttons ({folders, onClick}) {
  return (
   <div className="Buttons">
      {folders.map((folder) => <Button key={folder.id} folder={folder} onClick={onClick}/>)}
   </div>
  )
}

//버튼을 클릭하면 -> 버튼 아이디 마다 다른 api를 호출하여 -> 파일 보여준다. 

// 버튼 클릭 -> api 호출 -> 파일 보여줌 