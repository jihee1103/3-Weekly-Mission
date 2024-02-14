import { Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from 'react';

import { useObserverOnScroll } from '@hooks/useObserverOnScroll';

type TOnIntersectingStateChange = <T extends HTMLElement>({
  isTargetVisible,
  setTargetVisibleState,
  isIntersecting,
  target,
}: {
  isTargetVisible: boolean;
  isIntersecting: boolean;
  target: T | null;
  setTargetVisibleState: Dispatch<SetStateAction<boolean>>;
}) => void;

export const useTargetVisibleState = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  callback: TOnIntersectingStateChange,
) => {
  const [isTargetVisible, setTargetVisibleState] = useState(true);

  const {
    intersetcionResult: { isIntersecting, target },
  } = useObserverOnScroll(ref);

  useEffect(() => {
    callback({ isIntersecting, target, isTargetVisible, setTargetVisibleState });
  }, [isIntersecting, callback]);

  return isTargetVisible;
};
