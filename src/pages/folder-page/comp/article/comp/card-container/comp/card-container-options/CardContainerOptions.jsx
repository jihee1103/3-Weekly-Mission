import { useMemo } from 'react';
import styles from './CardContainerOptions.module.css';

const CardContainerOptions = () => {
  const mappedData = useMemo(
    () => [
      { source: 'share', name: '공유' },
      { source: 'pen', name: '이름 변경' },
      { source: 'delete', name: '삭제' },
    ],
    [],
  );

  return (
    <div className={styles['card-container-options-box']}>
      {mappedData.map((d) => (
        <button type='button' className={styles['card-container-options-btn']} key={d.name}>
          <img
            className={styles['card-container-options-icon']}
            src={`${process.env.PUBLIC_URL}/images/folder/${d.source}.svg`}
            alt={`${d.name} 기능 버튼`}
          />
          <span className={styles['card-container-options-text']}>{d.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CardContainerOptions;
