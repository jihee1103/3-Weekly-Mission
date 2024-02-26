import { FieldValues, UseFormRegister } from 'react-hook-form'
import styles from './inputForm.module.css'
import { ChangeEvent } from 'react'

type inputFormProps = {
  type: string
  register: any
}

interface ValidatorType {
  required: string
  pattern: {
    value: RegExp
    message: string
  }
}
interface inputProps {
  type: string
  placeHolder: string
  register: UseFormRegister<FieldValues>
  registerName: string
  errorMessage: string
  eyeIcon: boolean
  validator: ValidatorType
  changeMessage: (
    e: ChangeEvent<HTMLInputElement>,
    registerName: string
  ) => void
}

export default function InputForm({ type, register }: inputFormProps) {
  let contents = {
    typeOfValue: '',
    title: '',
    placeHolder: '',
    errorMessage: '',
    eyeIcon: false,
  }

  switch (type) {
    case 'email':
      contents = {
        typeOfValue: 'email',
        title: '이메일',
        placeHolder: '이메일을 입력해 주세요.',
        errorMessage: '올바른 이메일 주소가 아닙니다.',
        eyeIcon: false,
      }
      break
    case 'signInPassword':
      contents = {
        typeOfValue: 'signInPassword',
        title: '비밀번호',
        placeHolder: '비밀번호를 입력해 주세요.',
        errorMessage: '비밀번호를 확인해주세요.',
        eyeIcon: true,
      }
      break
    case 'signUpPassword':
      contents = {
        typeOfValue: 'signUpPassword',
        title: '비밀번호',
        placeHolder: '영문, 숫자를 조합해 8자 이상 입력해 주세요.',
        errorMessage: '비밀번호는 열문, 숫자 조합 8자 이상 입력해 주세요.',
        eyeIcon: true,
      }
      break
    case 'passwordChecker':
      contents = {
        typeOfValue: 'passwordChecker',
        title: '비밀번호',
        placeHolder: '비밀번호와 일치하는 값을 입력해 주세요.',
        errorMessage: '비밀번호가 일치하지 않아요.',
        eyeIcon: true,
      }
      break
  }

  return (
    <div className={styles.container}>
      <div>{contents.title}</div>
      <input
        className={styles.input}
        {...register(`${styles.typeOfValue}`, {
          required: `${contents.errorMessage}`,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '올바른 이메일 주소가 아닙니다.',
          },
        })}
        placeholder={contents.placeHolder}
      />
    </div>
  )
}
