import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const InscriptionStep3 = ({onFinalSubmit, onPreviousStep}) => {
  const initialValues = {
    password: '',
    gender: '',
    biography: '',
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Mot de passe requis'),
    gender: Yup.string().required('Genre requis'),
    biography: Yup.string().required('Biographie requise'),
  });

  const handleSubmit = values => {
    console.info(values);
    onFinalSubmit(values);
  };

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit: formikSubmit,
          values,
          errors,
          touched,
          dirty,
          isValid,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
              placeholder="Mot de passe"
            />
            {errors.password && touched.password && (
              <Text>{errors.password}</Text>
            )}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              placeholder="Genre"
            />
            {errors.gender && touched.gender && <Text>{errors.gender}</Text>}

            <TextInput
              style={styles.biographyInput}
              onChangeText={handleChange('biography')}
              onBlur={handleBlur('biography')}
              value={values.biography}
              multiline={true}
              placeholder="Biographie"
            />
            {errors.biography && touched.biography && (
              <Text>{errors.biography}</Text>
            )}

            <View style={styles.buttonContainer}>
              <Button onPress={onPreviousStep} title="Retour" />
              <Button
                onPress={formikSubmit}
                title="Terminer l'inscription"
                disabled={!dirty || !isValid}
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
InscriptionStep3.propTypes = {
  onFinalSubmit: PropTypes.func.isRequired,
  onPreviousStep: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 15,
  },
  biographyInput: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 15,
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default InscriptionStep3;
