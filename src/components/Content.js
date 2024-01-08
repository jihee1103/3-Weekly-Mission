import { getUserFolder, getFolderList } from "../api";
import useGetUserFolderAsync from "../hooks/useGetUserFolderAsync";
import useGetFolderListAsync from "../hooks/useGetFolderListAsync";
import Card from "./Card";
import { useState } from "react";
import "./Content.css";

export default function Content() {
  const [title, setTitle] = useState("전체");
  const [folderId, setFolderId] = useState(0);
  const data = useGetUserFolderAsync(getUserFolder);
  const folderList = useGetFolderListAsync(getFolderList);

  const handleClick = (title, id) => {
    setTitle(title);
    setFolderId(id);
  };

  let isNotEmpty = true;

  isNotEmpty = data?.some((data) => data.folder_id === folderId || !folderId);

  return (
    <section className="content">
      <div className="folder-title-container">
        <div>
          <button
            className={title==="전체" ? "folder-title selected" : "folder-title"}
            onClick={() => handleClick("전체", 0)}
          >
            전체
          </button>
          {folderList?.map((folder) => (
            <button
              className={title===folder.name ? "folder-title selected" : "folder-title"}
              key={folder.id}
              onClick={() => {
                handleClick(folder.name, folder.id);
              }}
            >
              {folder.name}
            </button>
          ))}
        </div>
        <button className="plus-btn">
          폴더추가
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.52151 2.46603C8.52151 2.17148 8.28272 1.9327 7.98817 1.9327C7.69362 1.9327 7.45484 2.17148 7.45484 2.46603L7.45484 7.96668L1.95425 7.96668C1.6597 7.96668 1.42092 8.20546 1.42092 8.50001C1.42092 8.79456 1.6597 9.03335 1.95425 9.03335L7.45484 9.03335L7.45484 14.534C7.45484 14.8285 7.69362 15.0673 7.98817 15.0673C8.28273 15.0673 8.52151 14.8285 8.52151 14.534L8.52151 9.03335L14.0222 9.03335C14.3168 9.03335 14.5555 8.79457 14.5555 8.50002C14.5555 8.20546 14.3167 7.96668 14.0222 7.96668L8.52151 7.96668L8.52151 2.46603Z"
              fill="#6D6AFE"
            />
          </svg>
        </button>
      </div>

      <div>
        <h2>{title}</h2>{title === "전체" ||
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <g clip-path="url(#clip0_7423_3307)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.39498 11.045C7.13138 10.7813 7.13138 10.354 7.39498 10.0904L13.8295 3.52012H10.3679C9.99513 3.52012 9.69292 3.21792 9.69292 2.84512C9.69292 2.47233 9.99513 2.17012 10.3679 2.17012H15.4591C15.8319 2.17012 16.1341 2.47233 16.1341 2.84512L16.1341 7.93629C16.1341 8.30909 15.8319 8.61129 15.4591 8.61129C15.0863 8.61129 14.7841 8.30908 14.7841 7.93629L14.7841 4.47472L8.34958 11.045C8.08597 11.3086 7.65859 11.3086 7.39498 11.045Z"
                  fill="#9FA6B2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.50002 4.77505C3.8787 4.77505 3.37502 5.27873 3.37502 5.90005V14C3.37502 14.6214 3.8787 15.125 4.50002 15.125H12.6C13.2213 15.125 13.725 14.6214 13.725 14V10.85C13.725 10.4773 14.0272 10.175 14.4 10.175C14.7728 10.175 15.075 10.4773 15.075 10.85V14C15.075 15.367 13.9669 16.475 12.6 16.475H4.50002C3.13312 16.475 2.02502 15.367 2.02502 14V5.90005C2.02502 4.53314 3.13312 3.42505 4.50002 3.42505H7.65002C8.02282 3.42505 8.32502 3.72726 8.32502 4.10005C8.32502 4.47284 8.02282 4.77505 7.65002 4.77505H4.50002Z"
                  fill="#9FA6B2"
                />
              </g>
              <defs>
                <clipPath id="clip0_7423_3307">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3788 2.4083C12.8196 1.96742 13.5333 1.96742 13.9742 2.4083L16.6718 5.10595C17.1127 5.54683 17.1127 6.2605 16.6718 6.70139L7.67596 15.6973C7.59335 15.7799 7.48616 15.8335 7.37049 15.85L3.25285 16.4382C3.08459 16.4623 2.91483 16.4057 2.79464 16.2855C2.67446 16.1653 2.61787 15.9956 2.64191 15.8273L3.23014 11.7097C3.24667 11.594 3.30026 11.4868 3.38288 11.4042L12.3788 2.4083ZM13.2105 3.17197C13.1914 3.15286 13.1616 3.15286 13.1424 3.17197L4.27383 12.0406L3.81288 15.2673L7.03957 14.8063L15.9082 5.93771C15.9273 5.91859 15.9273 5.88874 15.9082 5.86962L13.2105 3.17197Z"
                fill="#9FA6B2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3229 3.75704C15.5338 3.96792 15.5338 4.30983 15.3229 4.52071L8.26412 11.5795C8.05324 11.7904 7.71133 11.7904 7.50045 11.5795C7.28956 11.3687 7.28956 11.0267 7.50045 10.8159L14.5593 3.75704C14.7702 3.54616 15.1121 3.54616 15.3229 3.75704Z"
                fill="#9FA6B2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.38302 11.4043C3.5939 11.1934 3.93581 11.1934 4.14669 11.4043L7.6761 14.9337C7.88699 15.1446 7.88699 15.4865 7.6761 15.6973C7.46522 15.9082 7.12331 15.9082 6.91243 15.6973L3.38302 12.1679C3.17213 11.957 3.17213 11.6151 3.38302 11.4043Z"
                fill="#9FA6B2"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3788 2.4083C12.8196 1.96742 13.5333 1.96742 13.9742 2.4083L16.6718 5.10595C17.1127 5.54683 17.1127 6.2605 16.6718 6.70139L7.67596 15.6973C7.59335 15.7799 7.48616 15.8335 7.37049 15.85L3.25285 16.4382C3.08459 16.4623 2.91483 16.4057 2.79464 16.2855C2.67446 16.1653 2.61787 15.9956 2.64191 15.8273L3.23014 11.7097C3.24667 11.594 3.30026 11.4868 3.38288 11.4042L12.3788 2.4083ZM13.2105 3.17197C13.1914 3.15286 13.1616 3.15286 13.1424 3.17197L4.27383 12.0406L3.81288 15.2673L7.03957 14.8063L15.9082 5.93771C15.9273 5.91859 15.9273 5.88874 15.9082 5.86962L13.2105 3.17197Z"
                fill="#9FA6B2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3229 3.75704C15.5338 3.96792 15.5338 4.30983 15.3229 4.52071L8.26412 11.5795C8.05324 11.7904 7.71133 11.7904 7.50045 11.5795C7.28956 11.3687 7.28956 11.0267 7.50045 10.8159L14.5593 3.75704C14.7702 3.54616 15.1121 3.54616 15.3229 3.75704Z"
                fill="#9FA6B2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.38302 11.4043C3.5939 11.1934 3.93581 11.1934 4.14669 11.4043L7.6761 14.9337C7.88699 15.1446 7.88699 15.4865 7.6761 15.6973C7.46522 15.9082 7.12331 15.9082 6.91243 15.6973L3.38302 12.1679C3.17213 11.957 3.17213 11.6151 3.38302 11.4043Z"
                fill="#9FA6B2"
              />
            </svg>
          </span>
        </div>}
      </div>
      <div className="card-container">
        {data?.map(
          (data) =>
            (data.folder_id === folderId || !folderId) && (
              <Card key={data?.id} data={data} />
            )
        )}
        {isNotEmpty || <div className="no-link">저장된 링크가 없습니다</div>}
      </div>
    </section>
  );
}
