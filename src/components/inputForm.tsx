import styles from './inputForm.module.css'

type inputFormProps = {
  type: string
}

export default function InputForm({ type }: inputFormProps) {
  let contents = {
    title: '',
    placeHolder: '',
    eyeIcon: false,
  }

  switch (type) {
    case 'email':
      contents = {
        title: '이메일',
        placeHolder: '이메일을 입력해 주세요.',
        eyeIcon: false,
      }
      break
    case 'signInPassword':
      contents = {
        title: '비밀번호',
        placeHolder: '비밀번호를 입력해 주세요',
        eyeIcon: true,
      }
      break
    case 'signUpPassword':
      contents = {
        title: '비밀번호',
        placeHolder: '영문, 숫자를 조합해 8자 이상 입력해 주세요.',
        eyeIcon: true,
      }
      break
    case 'passwordChecker':
      contents = {
        title: '비밀번호',
        placeHolder: '비밀번호와 일치하는 값을 입력해 주세요',
        eyeIcon: true,
      }
      break
  }

  return (
    <div className={styles.container}>
      <div>{contents.title}</div>
      <input className={styles.input} placeholder={contents.placeHolder} />
    </div>
  )
}
