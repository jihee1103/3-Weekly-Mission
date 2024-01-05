import TimeAgo from './MainFileTimeAgo';
const TEMP_IMAGE = 'https://s3-alpha-sig.figma.com/img/7f74/ead6/eb1ccd75abb3bcb7fbda1536cf0718ab?Expires=1704672000&Signature=LiCmhbMFxPcHwHM~eunm~GUqamXyo6dqYjN6VHI5l4e2DAZIn99n0w4cLbS~aTKGgrbgBee2CX8y9Bh0sAaDRe0JX5erbHDrLwAKp6CElf1NIZjvsxtk9VCgEoBFnNA-stzLMmV79kdwV8TUupeXMzf~4XZImr3-VjA5bgfjhm51tGF2YTKmKh1YsvIZ3jrj7DwHi6Zfg6mMYVFMDhG6cBW8AjzgIVf3njiImPKo5k1y5m0k4NMF-o9E7jzkk1raemYMaTeNjcanw31oEjR0K7aFwtC9YzEd0aH0mNH72xjpKFyrep1tKNo2JLoNCiUaSSwIG-EfNVAy7NJH0h87Qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

function File({file}) {
  const { url, title, description, imageSource, createdAt } = file
  const handleClick = function(){
    window.open(url, '_blank');
  }
  let year = new Date(createdAt).getFullYear();
  let month = new Date(createdAt).getMonth();
  let date = new Date(createdAt).getDate();
  let editedTime = year + '-' + (month+1) + '-' + date;
  return (
    <div className='File' onClick={handleClick}>
    <div className='item01'>
      <img src={imageSource === undefined ? TEMP_IMAGE : imageSource} alt={title} />
    </div>
    <div className='item02'>
      <TimeAgo className='timeAgo' time={createdAt}/>
       <div className='description'>{description}</div>
       <div className='editTime'>{editedTime}</div>
    </div>
      
    </div>
  )
}

export default function MainFiles({folders}) {
  return (
    <div className='MainFiles'>
      {folders.map((folder) => (
        <File file={folder}/>
      ))}
    </div>
  )
}