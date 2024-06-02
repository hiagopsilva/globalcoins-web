import React, { useState } from 'react'
import {
  Avatar,
  ButtonLogout,
  Container,
  ContentUser,
  IconLogout,
  NameCompany,
  Option,
  PersonIconStyled,
  Username,
  WrapperOptionsMenu,
  WrapperUser,
} from './styles'

const Menu: React.FC = () => {
  const [valueOptionMenu, setValueOptionMenu] = useState('Home')

  const handleOptionMenu = (option: string) => {
    setValueOptionMenu(option)
  }

  const optionsMenu = ['Home', 'Favoritos']
  return (
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
  )
}

export default Menu
