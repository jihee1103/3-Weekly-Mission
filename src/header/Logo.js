function Logo({value}){
  const src = value
  return (
    <div className="Logo">
      <img src={src} alt={value} />
    </div>
  )
}

export default Logo;