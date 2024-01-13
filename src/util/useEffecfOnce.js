import { useEffect } from "react";

export const useEffectOnce = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

//중간에 주석은 ESLint에게 댑스가 비어있는 것에 대해 경고하지 않도록 하는 역할 (다음 한 줄에 대해)
//useEffect의 의존성 배열을 비워 놓음으로써 컴포넌트가 처음 마운트 될 때만 콜백을 실행하도록함
//초기화 작업, 데이터 로딩, 이벤트 처리 등 초기 마운트 시에 필요한 작업을 처리하는데 유용!
