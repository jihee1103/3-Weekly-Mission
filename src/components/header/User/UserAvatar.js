function UserAvatar({value}) {
  return(
    <div className="UserAvatar">
      <img src={value} alt={value} />
    </div>
  )
}

export default UserAvatar;