import ParticipantsList from '../ParticipantsList'
import { PageContainer, StyledTitle, TitleContainer } from './ContestPage.style'

function ContestOverview (props) {
  return (
    <PageContainer>
      <TitleContainer>
        <StyledTitle>{props.name}</StyledTitle>
        <h3>Subject: {props.subject}</h3>
        <p>Contest date: {props.date}</p>
        <p>Created by: {props.createdBy}</p>
      </TitleContainer>
      <ParticipantsList contest={props.name}/>
    </PageContainer>
  )
}

export default ContestOverview
