import styled from 'styled-components'

export const CalendarContainer = styled.div`
  .highlight {
    background: pink;
  }

  .react-calendar {
    border-style: solid;
    width: 320px;
    border-color: ${props => props.theme.border};
    border-width: 2px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
`
export const FormEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ContestTableTitle = styled.div`
  margin-bottom: 10px;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  color: magenta;

`