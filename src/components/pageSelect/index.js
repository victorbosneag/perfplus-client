import styled from "styled-components";
import ReactPaginate from "react-paginate";

export default styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;

  li {
    padding-left: 5px;
  }

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }

  li.previous a,
  li.next a {
    border-radius: 10px;
    background-color: green;
    color: white;
  }
  
  li.break a {
    border-color: transparent;
  }

  li.active a {
    background-color: green;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }

  li.disabled a {
    color: #004800;
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;