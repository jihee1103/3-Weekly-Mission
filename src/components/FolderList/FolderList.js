// import { useFolderNameContext } from "../../context/FolderNameContext";
// import "./FolderList.css";

// const FolderList = ({ folderList }) => {
//   const { setFolderNameValue, setFolderIdValue } = useFolderNameContext();

//   const handleFolderName = (clickItemName) => {
//     setFolderNameValue(clickItemName);
//   };

//   const handleFolderId = (clickItemId) => {
//     setFolderIdValue(clickItemId);
//   };
//   console.log({ folderList });
//   return (
//     <div className="folderList">
//       <p
//         className="folderItem"
//         onClick={() => {
//           handleFolderName("전체");
//         }}
//       >
//         전체
//       </p>
//       {folderList.map((item) => (
//         <p
//           className="folderItem"
//           onClick={() => {
//             handleFolderName(item.name);
//             handleFolderId(item.id);
//             console.log(item);
//           }}
//         >
//           {item.name}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default FolderList;
