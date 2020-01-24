import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text, View, Button, Spinner, Form } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Field } from 'redux-form';
import FormField from './../../../components/FormField';

// create a component
const LoginForm = props => {
  const { logIn, handleSubmit, loading } = props;
  return (
    <View style={styles.container}>
      <Form>
        <Field
          name={'email'}
          component={FormField}
          label={'Email'}
          keyboardType={'email-address'}
        />
        <Field name={'password'} component={FormField} label={'Password'} />
      </Form>

      <View style={styles.submitBtn}>
        <Button block success disabled={loading} onPress={handleSubmit(logIn)}>
          {loading ? (
            <Spinner color="#FFF" />
          ) : (
            <Text uppercase={false}>Inicia sesión</Text>
          )}
        </Button>
      </View>
    </View>
  );
};

LoginForm.propTypes = {
  logIn: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
  submitBtn: {
    paddingVertical: 20
  }
});

//make this component available to the app
export default withNavigation(LoginForm);
