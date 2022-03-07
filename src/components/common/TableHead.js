import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const TableHead = ({ headers, selectedSort, onSort }) => {
  const sortHandler = ({ column, filterable }, type) => {
    if (filterable) {
      onSort(column, type === "asc" ? "desc" : "asc");
    }
  };

  const renderIcon = (column) => {
    if (selectedSort.column === column) {
      if (selectedSort.type === "asc") {
        return <FaAngleUp />;
      } else {
        return <FaAngleDown />;
      }
    }
  };

  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th
            key={header.id}
            onClick={() => sortHandler(header, selectedSort.type)}
            className={`${header.filterable && "clickable"}`}
          >
            {header.label}
            {header.filterable && renderIcon(header.column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
