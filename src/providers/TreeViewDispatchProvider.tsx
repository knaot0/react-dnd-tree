import { TreeViewDispatchContext } from "../contexts/TreeViewDispatchContext";

export const TreeViewDispatchProvider: React.FC = ({ children }) => {
  return (
    <TreeViewDispatchContext.Provider value={null}>
      {children}
    </TreeViewDispatchContext.Provider>
  );
};
