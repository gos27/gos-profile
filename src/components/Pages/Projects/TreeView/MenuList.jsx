import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <ul className="tree-view-container">
      {list && list.length ? (
        list.map((listItem, index) => (
          <MenuItem key={listItem.id || index} item={listItem} />
        ))
      ) : (
        <p>Empty List</p>
      )}
    </ul>
  );
}
export default MenuList;
