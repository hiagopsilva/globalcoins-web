import React, { useState } from 'react'
import {
  Avatar,
  ButtonIconMenu,
  ButtonLogout,
  Container,
  ContainerMenuMobile,
  ContainerPopover,
  ContentUser,
  IconLogout,
  IconMenu,
  NameCompany,
  NamePageMenu,
  Option,
  OptionMenuPopover,
  PersonIconStyled,
  TextPopover,
  Username,
  WrapperAvatarMenuMobile,
  WrapperOptionsMenu,
  WrapperUser,
} from './styles'
import { Popover } from '@mui/material'

const Menu: React.FC = () => {
  const [valueOptionMenu, setValueOptionMenu] = useState('Home')

  const handleOptionMenu = (option: string) => {
    setValueOptionMenu(option)
  }

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const optionsMenu = ['Home', 'Favoritos']
  return (
    <>
      <Container>
        <NameCompany>Global Coins</NameCompany>

        <WrapperOptionsMenu>
          {optionsMenu.map((item) => (
            <Option
              key={item}
              active={valueOptionMenu === item}
              onClick={() => handleOptionMenu(item)}
            >
              {item}
            </Option>
          ))}
        </WrapperOptionsMenu>

        <WrapperUser>
          <ContentUser>
            <Avatar>
              <PersonIconStyled />
            </Avatar>
            <Username>Hiago</Username>
          </ContentUser>
          <ButtonLogout>
            <IconLogout />
          </ButtonLogout>
        </WrapperUser>
      </Container>

      <ContainerMenuMobile>
        <NamePageMenu>{valueOptionMenu}</NamePageMenu>

        <WrapperAvatarMenuMobile>
          <ContentUser>
            <Avatar>
              <PersonIconStyled />
            </Avatar>
            <Username>Hiago</Username>
          </ContentUser>

          <ButtonIconMenu onClick={handleClick}>
            <IconMenu></IconMenu>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <ContainerPopover>
                <OptionMenuPopover>
                  <TextPopover>Home</TextPopover>
                </OptionMenuPopover>

                <OptionMenuPopover>
                  <TextPopover>Favoritos</TextPopover>
                </OptionMenuPopover>

                <OptionMenuPopover>
                  <TextPopover>Sair</TextPopover>
                </OptionMenuPopover>
              </ContainerPopover>
            </Popover>
          </ButtonIconMenu>
        </WrapperAvatarMenuMobile>
      </ContainerMenuMobile>
    </>
  )
}

export default Menu
