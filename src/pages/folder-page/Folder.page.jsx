import DocumentTitle from '@layout/document-title/DocumentTitle';
import FolderContextProvider from '@pages/folder-page/context/FolderContextProvider';

import AddLink from './comp/add-link/AddLink';
import Article from './comp/article/Article';
import Footer from './comp/footer/Footer';
import Header from './comp/header/Header';

/**
 * # Todo : Header, Footer shared 페이지랑 folder 페이지 공통 Route로 빼기
 * * FolderContextProvider에 오픈할 모달, 모달에 전달할 데이터 받는 프로퍼티 생성하기.
 * * FolderContextProvider는 Folder 페이지에만 제공.
 * * 각 컴포넌트에 있는 포탈이랑 모달 여기로 옮기기 -> 각 컴포넌트에서는 모달에 넣을 props랑 여기서 띄울 모달 컴포넌트만 주입하기.
 * * 정해진 prop 넣는 게 아니라 자유롭게 넣되, 하나의 객체형태 안에 담아서 넣도록 수정하기: useModal 로직 변경하기(`toggleAndSetModal`)
 * * userId를 Header 컴포넌트에서 받으면서 web storage에 저장하기. ---> context에서 필요없어짐.
 * * FolerLinkCategory -> FolerCategory로 이름 변경하기
 * * CardContainerOptions -> FolderOptions로 이름 변경하기
 *
 * ## 모달에 필요한 Props들
 * 1. 전체 폴더 카테고리 배열과 폴더에 담겨있는 링크들의 개수(폴더에 등록하기 모달에서 필요) ---> `<AddLink />`에서도 접근 가능하게 해야 해서 context에서 관리해야 함.
 * 2. 현재 선택한 폴더(`<CardContainerOptions />`의 폴더 삭제하기, 폴더 이름 변경 모달에서 필요)
 * -> [ 1안 ] 각 컴포넌트에서 prop으로 넘겨서 할 거면, `<FolderLinkCategory />`에서 특정 폴더를 선택하면 `<CardContainerOptions />`에서 선택한 폴더를 prop으로 받아야 함.
 * -> [ 2안 ] 아니면 그냥 (폴더 바뀔 때 NavLink search 옵션 사용) url 쿼리 스트링으로 해도 됨. CardContainerOptions에서 `useLocation` 써서 모달에 전달함
 * 3. 현재 선택한 폴더 공유(`<CardContainerOptions />`의 폴더 공유하기 모달에서 필요)
 * -> `<FolerLinkCategory />`에서 NavLink로 query string url에 넣어주고, <CardContainerOptions />에서 useLocation으로 url query string 써서 해결하면 됨.
 * 4. 현재 선택한 링크(링크 삭제하기 모달에서 필요) -> 각 컴포넌트에서 prop으로 넘겨도 되고 context로 해도 되고.
 *
 * ## 각 모달에서 Action 수행 후 refetch를 어떻게 유발할 것인가?
 * fetch 함수가 담긴 useEffect의 의존성 배열 값에 공통적으로 쓸만한 값이 필요. -> react query가 사용하는 키 확인하고 useReducer boolean 토글 방식?
 */
const Folder = () => {
  return (
    <>
      <DocumentTitle title='Folder' />
      <FolderContextProvider>
        <Header />
        <AddLink />
        <Article />
        <Footer />
      </FolderContextProvider>
    </>
  );
};

export default Folder;
