import ListGroup from "react-bootstrap/ListGroup";

const Filter = ({ filters, selectedFilter, onSelectFilter }) => {
  return (
    <ListGroup>
      {filters.map((filter) => (
        <ListGroup.Item
          className="clickable"
          key={filter._id}
          active={selectedFilter === filter._id}
          onClick={() => onSelectFilter(filter._id)}
        >
          {filter.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Filter;
