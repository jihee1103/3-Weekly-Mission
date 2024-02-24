import styles from './button.module.css'

export default function Button({ type }) {
  return (
    <button className={styles.cta} type="submit">
      {type === 'signup' ? '회원가입' : '로그인'}
    </button>
  )
}
