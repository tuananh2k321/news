import React from 'react';
import { Text } from 'react-native';
import { SIZES, COLOR } from '../constants/theme';

const UITextInput = (props) => {
    const {label} = props;
    return (
        <Text style={{
            fontSize: SIZES.h5,
            color: COLOR.description,
        }}
        >{label}</Text>
    )
}

export default UITextInput