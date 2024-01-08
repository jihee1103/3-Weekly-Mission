import { useCallback, useEffect, useState } from 'react';
import { getFolderCategory } from '@api/folder-page/getFolderCategory';

// {
//   "data": [
//     {
//       "id": 14,
//       "created_at": "2023-06-04T20:59:39.293024+00:00",
//       "name": "⭐️ 즐겨찾기",
//       "user_id": 1,
//       "favorite": true,
//       "link": {
//         "count": 0
//       }
//     },
//     {
//       "id": 16,
//       "created_at": "2023-06-04T21:00:05.704754+00:00",
//       "name": "유용한 글",
//       "user_id": 1,
//       "favorite": false,
//       "link": {
//         "count": 6
//       }
//     },
//     {
//       "id": 17,
//       "created_at": "2023-06-04T21:00:22.007605+00:00",
//       "name": "플리",
//       "user_id": 1,
//       "favorite": false,
//       "link": {
//         "count": 0
//       }
//     },
//     {
//       "id": 24,
//       "created_at": "2023-06-18T13:33:09.993192+00:00",
//       "name": "신규 폴더1",
//       "user_id": 1,
//       "favorite": false,
//       "link": {
//         "count": 0
//       }
//     },
//     {
//       "id": 40,
//       "created_at": "2023-06-04T07:36:33+00:00",
//       "name": "채용 사이트",
//       "user_id": 1,
//       "favorite": false,
//       "link": {
//         "count": 1
//       }
//     },
//     {
//       "id": 168,
//       "created_at": "2023-07-23T09:11:30.071673+00:00",
//       "name": "명동 맛집",
//       "user_id": 1,
//       "favorite": false,
//       "link": {
//         "count": 0
//       }
//     }
//   ]
// }

const useGetFolderCategoryList = () => {
  const [folderCategoryList, setFolderCategoryList] = useState([]);

  const fetchAndSetFolderCategory = useCallback(async () => {
    const { data } = await getFolderCategory();
    data.unshift({ name: '전체', id: 'total' });
    setFolderCategoryList(data);
  }, []);

  useEffect(() => {
    fetchAndSetFolderCategory();
  }, [fetchAndSetFolderCategory]);
  return folderCategoryList;
};

export { useGetFolderCategoryList };
