import styled from "styled-components";
import ToggleSwitch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
   align-items: center;
   display: flex;
`

export const ToggleLabel = styled.span`
   color: ${props => props.theme.colors.white}
`

export const ToggleSelector = styled(ToggleSwitch).attrs<ReactSwitchProps>(({theme}) => ({
   onColor: theme.colors.info,
   offColor: theme.colors.warning
})
)<ReactSwitchProps>`
   margin: 0 5px;
`