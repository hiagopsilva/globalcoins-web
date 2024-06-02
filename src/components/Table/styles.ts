import { Popover } from '@mui/material'
import styled from 'styled-components'

type PropsTable = {
  activeCard?: boolean
  paidCard?: boolean
  icon?: boolean
}

export const Wrapper = styled.table`
  width: 90%;
  border-spacing: 0 8px;
  margin: 0 auto;

  th {
    font-weight: normal;
    padding: 20px 32px 0;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }

  td {
    padding: 20px 32px;
    border: 0;
    font-size: 16px;
    font-weight: 500;
    background-color: #ddd;
  }

  td:first-child {
    border-radius: 8px 0 0 8px;
  }

  td:last-child {
    border-radius: 0 8px 8px 0;
  }

  td {
    cursor: pointer;
  }

  tr:hover {
    filter: brightness(0.92);
  }
`

export const TD = styled.td<PropsTable>`
  &:first-child {
    border-left: 8px solid
      ${(props) => (props.activeCard ? 'red' : 'transparent')};
  }

  &:last-child {
    border-right: 8px solid
      ${(props) => (props.paidCard ? 'red' : 'transparent')};
  }
`

export const PopoverStyled = styled(Popover)`
  position: absolute;
  right: 0;
`
