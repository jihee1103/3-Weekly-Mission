import Link from 'next/link'
import styles from './socialBox.module.css'
import Image from 'next/image'

type socialBoxProps = {
  type: string
}

export default function SocialBox({ type }: socialBoxProps) {
  return (
    <div className={styles.container}>
      <div>{type === 'signUp' ? '다른 방식으로 가입하기' : '소셜 로그인'}</div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <Link href="https://www.google.com/">
            <Image
              width={42}
              height={42}
              src="/images/google_logo.svg"
              alt="google로그인"
            />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="https://www.google.com/">
            <Image
              width={42}
              height={42}
              src="/images/kakao_logo.svg"
              alt="kakao로그인"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
