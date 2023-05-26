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
    font-size: x-large;
    padding-left: 5px;
  }

  li a {
    background-color: ${props => props.theme.accent1};
    color: white;
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }

  li.previous a,
  li.next a {
    border-radius: 10px;
    background-color: ${props => props.theme.accent1};
    color: white;
  }

  li.break a {
    border-color: transparent;
  }

  li.active a {
    background-color: ${props => props.theme.accent2};
    border-color: transparent;
    color: ${props => props.theme.defaultFont};;
    min-width: 32px;
  }

  li.disabled a {
    color: ${props => props.theme.defaultFont};
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;