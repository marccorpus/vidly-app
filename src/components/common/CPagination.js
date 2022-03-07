import Pagination from "react-bootstrap/Pagination";

const CPagination = ({ count, perPage, selectedPage, onSelectPage }) => {
  const pages = Math.ceil(count / perPage);

  const items = [];
  for (let page = 1; page <= pages; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === selectedPage}
        onClick={() => onSelectPage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};

export default CPagination;
