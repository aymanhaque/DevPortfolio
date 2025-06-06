import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const Card = () => {
  return (
    <CCard style={{ width: '18rem' }} className='text-neutral-50'>
      <CCardImage orientation="top" src={"https://github.com/acm-projects/Harmoni/blob/main/frontEnd/img/honeybear.png?raw=true"} />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}