import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  padding: 50px;
  box-sizing: border-box;
`

export const ContestPageLink = styled(Link)`
  font-size: 18px;
  border-style: solid;
  background-color: ${props => props.theme.accent1};
  border-radius: 5px;
  border-width: 2px;
  border-color: ${props => props.theme.optionbar};
  color: ${props => props.theme.links};
  padding: 8px;
  text-decoration: none;
  font-weight: bold;
`

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 30px;
`;