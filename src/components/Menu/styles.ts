import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import MenuIcon from '@mui/icons-material/Menu'

export const Container = styled.div`
  border-bottom: 1px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 64px;
  color: #333;

  @media (min-width: 200px) and (max-width: 767px) {
    display: none;
  }
`

export const NameCompany = styled.span`
  font-size: 20px;
  font-weight: 600;
`

export const WrapperOptionsMenu = styled.div`
  display: flex;
`

export const Option = styled.span`
  margin-right: 16px;
  cursor: pointer;

  color: #ec8f21;
  font-weight: bold;
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

export const ContainerMenuMobile = styled.div`
  display: none;

  @media (min-width: 200px) and (max-width: 767px) {
    display: flex;
    width: 100%;

    justify-content: space-between;
    padding: 24px 16px 14px;
    border-bottom: 1px solid #ddd;
  }
`
export const NamePageMenu = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`

export const ButtonIconMenu = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  margin-left: 16px;
`

export const IconMenu = styled(MenuIcon)`
  cursor: pointer;
  color: #ec8f21;
`

export const ContainerPopover = styled.div`
  width: 200px;
  height: 120px;
`

export const OptionMenuPopover = styled.div`
  padding: 8px;
  cursor: pointer;

  & + & {
    border-top: 1px solid #ddd;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`

export const WrapperAvatarMenuMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TextPopover = styled.span``
