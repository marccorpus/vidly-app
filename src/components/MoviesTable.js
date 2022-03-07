import { v4 as uuidv4 } from "uuid";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import TableHead from "./common/TableHead";
import TableBody from "./common/TableBody";
import Like from "./common/Like";

const MoviesTable = ({ movies, selectedSort, onSort, onLike, onDelete }) => {
  const tableHeaders = [
    { id: uuidv4(), label: "Title", column: "title", filterable: true },
    { id: uuidv4(), label: "Genre", column: "genre.name", filterable: true },
    { id: uuidv4(), label: "Stock", column: "numberInStock", filterable: true },
    {
      id: uuidv4(),
      label: "Rate",
      column: "dailyRentalRate",
      filterable: true,
    },
    {
      id: uuidv4(),
      label: "",
      column: "action1",
      filterable: false,
      className: "text-center",
    },
    {
      id: uuidv4(),
      label: "",
      column: "action2",
      filterable: false,
      className: "text-center",
    },
  ];

  const tableData = movies.map((movie) => {
    return {
      id: movie._id,
      title: movie.title,
      "genre.name": movie.genre.name,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      isLike: movie.isLike,
      action1: <Like isLike={movie.isLike} onLike={() => onLike(movie._id)} />,
      action2: (
        <Button onClick={() => onDelete(movie._id)} variant="danger">
          Delete
        </Button>
      ),
    };
  });

  return (
    <Table striped>
      <TableHead
        headers={tableHeaders}
        selectedSort={selectedSort}
        onSort={onSort}
      />
      <TableBody headers={tableHeaders} data={tableData} />
    </Table>
  );
};

export default MoviesTable;
