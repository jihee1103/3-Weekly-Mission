import styles from "./CardSection.module.css";

export default function Search() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
  <div> 
    <form className={styles.formBox} onSubmit={handleSubmit}>
      <input  type='text' placeholder='링크를 검색해 보세요' />
      <img  src="/image/glass.svg" alt='glass' />
    </form>
  </div> 
  )
}