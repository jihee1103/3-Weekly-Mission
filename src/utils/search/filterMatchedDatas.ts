export const filterMatchedDatas = <T extends NonNullable<unknown>, U extends keyof T & string>(
  matchingTarget: T | null,
  matchingKeyword: string | undefined,
  matchingField: Array<U>,
): boolean => {
  if (matchingKeyword === '') return true;

  if (!matchingTarget) return false;

  for (let i = 0; i < matchingField.length; i++) {
    if (!matchingTarget[matchingField[i]] || typeof matchingTarget[matchingField[i]] !== 'string') return false;
  }

  // ''은 모든 문자열에 포함되므로, ''일 경우는 true를 반환한다.(즉, 검색어가 없을 경우는 모든 데이터를 반환한다.)
  const lowerCasedInput = matchingKeyword?.toLowerCase() || '';

  return matchingField.some((field) => {
    if (typeof matchingTarget[field] === 'string') {
      return (matchingTarget[field] as string).toLocaleLowerCase().includes(lowerCasedInput);
    }

    return false;
  });
};
