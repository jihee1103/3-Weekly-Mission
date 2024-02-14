interface Props {
  errorMessage?: string;
}

export default function Error({ errorMessage }: Props) {
  return <div>{errorMessage}</div>;
}
