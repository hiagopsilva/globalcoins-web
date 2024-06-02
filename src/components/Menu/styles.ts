import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

type PropsOptions = {
  active?: boolean
}

export const Container = styled.div`
  border-bottom: 1px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 64px;
  color: #333;
`

export const NameCompany = styled.span`
  font-size: 20px;
  font-weight: 600;
`

export const WrapperOptionsMenu = styled.div`
  display: flex;
`

export const Option = styled.div<PropsOptions>`
  margin-right: 16px;
  cursor: pointer;

  & + & {
    padding-left: 16px;

    border-left: 1px solid #ddd;
  }

  color: ${(props) => (props.active ? '#ec8f21' : '#333')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`

export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
`

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PersonIconStyled = styled(PersonIcon)`
  color: #333;
`

export const Username = styled.span`
  font-weight: bold;
`

export const ButtonLogout = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  cursor: pointer;
`

export const IconLogout = styled(ExitToAppIcon)``
