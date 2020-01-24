import React from 'react';
import { Item, Label, Input, Text, Icon } from 'native-base';
import { COLORS } from '../../utils/constants';

// create a component
const FormField = props => {
  const {
    input: { name, onChange, onBlur, value },
    meta: { error, touched },
    label,
    type
  } = props || false;

  const is_error = error && touched;
  const is_success = !error && touched;

  let inputForm = (
    <Item
      floatingLabel
      error={is_error}
      success={is_success}
      style={{ marginLeft: 0 }}>
      <Label>{label}</Label>
      <Input
        autoCapitalize={'none'}
        keyboardType={type ? type : 'default'}
        secureTextEntry={name === 'password'}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
      />
    </Item>
  );

  return (
    <>
      {inputForm}
      {is_error && (
        <Text style={{ fontSize: 12, color: COLORS.DANGER }}> {error} </Text>
      )}
    </>
  );
};

//make this component available to the app
export default FormField;
