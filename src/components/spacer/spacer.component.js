import React from 'react'
import {View } from 'react-native'
import styled from 'styled-components/native'

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3
}

const positionVariant = {
    left: 'marginLeft',
    top: 'marginTop',
    right: 'marginRight',
    bottom: 'marginBottom'
} 

const getVariant = (position, size) => `${positionVariant(position)}:${sizeVariant(size)}`
export const Spacer = styled.View`
    ${({position, size}) => getVariant(postion, size) }
`

Spacer.defaultProps = {
    position = "top",
    size = "small"
}