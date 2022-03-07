import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Filter from "./common/Filter";
import Results from "./Results";
import MoviesTable from "./MoviesTable";
import CPagination from "./common/CPagination";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import {
  filter as _filter,
  paginate as _paginate,
  sort as _sort,
} from "../utils";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const filters = [{ _id: "", name: "All Genres" }, ...getGenres()];
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [selectedSort, setSelectedSort] = useState({
    column: "title",
    type: "asc",
  });
  const [sortedMovies, setSortedMovies] = useState([]);

  const perPage = 4;
  const [selectedPage, setSelectedPage] = useState(1);
  const [paginatedMovies, setPaginatedMovies] = useState([]);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  useEffect(() => {
    const temp = _filter(
      movies,
      "genre._id",
      selectedFilter && [selectedFilter]
    );

    setFilteredMovies(temp);
  }, [movies, selectedFilter]);

  useEffect(() => {
    const temp = _sort(filteredMovies, selectedSort.column, selectedSort.type);

    setSortedMovies(temp);
  }, [filteredMovies, selectedSort]);

  useEffect(() => {
    const temp = _paginate(sortedMovies, perPage, selectedPage);

    setPaginatedMovies(temp);
  }, [sortedMovies, perPage, selectedPage]);

  const likeHandler = (id) => {
    const _movies = [...movies];
    const index = _movies.findIndex((_m) => _m._id === id);
    _movies[index].isLike = !_movies[index].isLike;

    setMovies(_movies);
  };

  const deleteHandler = (id) => {
    setMovies((prevMovies) =>
      prevMovies.filter((prevMovie) => prevMovie._id !== id)
    );
  };

  const selectPageHandler = (page) => {
    setSelectedPage(page);
  };

  const selectFilterHandler = (filter) => {
    setSelectedFilter(filter);
    setSelectedPage(1);
  };

  const selectedSortHandler = (column, type) => {
    setSelectedSort({ column, type });
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Filter
            filters={filters}
            selectedFilter={selectedFilter}
            onSelectFilter={selectFilterHandler}
          />
        </Col>
        <Col md={9}>
          <Row>
            <Col>
              <Results count={sortedMovies.length} />
            </Col>
          </Row>
          <Row>
            <Col>
              <MoviesTable
                movies={paginatedMovies}
                selectedSort={selectedSort}
                onSort={selectedSortHandler}
                onLike={likeHandler}
                onDelete={deleteHandler}
              />
            </Col>
          </Row>
          <Row>
            <CPagination
              count={sortedMovies.length}
              perPage={perPage}
              selectedPage={selectedPage}
              onSelectPage={selectPageHandler}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
