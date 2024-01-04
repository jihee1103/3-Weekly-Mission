import { getFolders } from "../api";

export default function useAsync(asyncFunction){
    const [folder, setFolder] = useState([]);

    useEffect(() => {
      const getFolder = async () => {
        const { folder } = await asyncFunction;
        setFolder(folder);
      };
  
      getFolder();
    }, []);
}