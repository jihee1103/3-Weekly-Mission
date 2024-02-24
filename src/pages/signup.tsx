import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/SignUp.module.css'
import Link from 'next/link'
import InputForm from '../components/inputForm'
import Button from '../components/button'
import SocialBox from '../components/socialBox'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <main>
        <div className={styles.main}>
          <div className={styles.top}>
            <div className={styles.logoImage}>
              <Link href="/">
                <Image
                  width={210.583}
                  height={38}
                  src="/images/logo.svg"
                  alt="Linkbrary로고"
                />
              </Link>
            </div>
            <div className={styles.question}>
              이미 회원이신가요?
              <Link href="/signin" className={styles.Link}>
                로그인하기
              </Link>
            </div>
          </div>
          <div className={styles.inputForm}>
            <InputForm type={'email'} />
            <InputForm type={'signUpPassword'} />
            <InputForm type={'passwordChecker'} />
          </div>
          <Button type={'signUp'} />
          <SocialBox type={'signUp'} />
        </div>
      </main>
    </>
  )
}
