import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
`
export const StyledTitle = styled.div`
  display: flex;
  font-size: xx-large;
  font-family: Arial, Helvetica, sans-serif;
  color: ${props => props.theme.navbar};
  margin: 10px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 20px;
  border-width: 4px;
  border-style: solid;
  border-radius: 5px;
  align-items: center;
  min-width: 200px;
`