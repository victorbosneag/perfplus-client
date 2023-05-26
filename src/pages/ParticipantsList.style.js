import styled from 'styled-components'
import {FormLabel} from "../components/formBox/style";

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

export const FilterContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  border-width: 4px;
  border-style: solid;
  align-items: center;
  background-color: #f1f1f1;
`

export const FilterLabel = styled(FormLabel)`
  font-size: x-large;
`