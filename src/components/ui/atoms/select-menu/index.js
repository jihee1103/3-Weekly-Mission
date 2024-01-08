import SelectMenuProvider from './context/SelectMenuProvider';
import AddMenu from './AddMenu';
import DeleteMenu from './DeleteMenu';

const SelectMenuWrapper = Object.assign(SelectMenuProvider, {
  AddMenu,
  DeleteMenu,
});

export default SelectMenuWrapper;
