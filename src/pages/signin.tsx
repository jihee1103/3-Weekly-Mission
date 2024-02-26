import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/SignUp.module.css'
import Link from 'next/link'
import InputForm from '../components/inputForm'
import Button from '../components/button'
import SocialBox from '../components/socialBox'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

interface FormData {
  email: string
  password: string
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <main className={styles.background}>
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
              회원이 아니신가요?
              <Link href="/signup" className={styles.Link}>
                회원 가입하기
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputForm}>
              <InputForm register={register} type={'email'} />
              <InputForm register={register} type={'signInPassword'} />
            </div>
            <Button type={'signIn'} />
          </form>
          <SocialBox type={'signIn'} />
        </div>
      </main>
    </>
  )
}
