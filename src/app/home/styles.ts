import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Content = styled.div`
  margin-top: 32px;
`

export const WrapperTable = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const Line = styled.div`
  margin: 16px 64px;
  display: flex;
  flex-direction: row;

  @media (min-width: 200px) and (max-width: 767px) {
    margin: 8px 16px;

    flex-direction: column;
  }
`

export const ContentGraphic = styled.div`
  width: 50%;
  border: 1px solid #ddd;
  border-radius: 8px;

  & + & {
    margin-left: 16px;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    width: 100%;

    overflow-x: scroll;

    & + & {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`
