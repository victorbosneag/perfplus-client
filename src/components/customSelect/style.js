import styled from 'styled-components'

export const StyledSelect = styled.select`
  margin: 10px;
  margin-left: 15px;
  margin-right: 15px;
  width: 120px;
  height: 30px;
  border: 1px solid #999;
  font-size: 18px;
  color: ${props => props.theme.defaultFont};
  background-color: #eee;
  border-radius: 5px;
`