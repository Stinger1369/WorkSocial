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

const InscriptionStep1 = ({onNextStep}) => {
  const initialValues = {
    username: '',
    lastName: '',
    firstName: '',
    birthDate: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Pseudo requis'),
    lastName: Yup.string().required('Nom requis'),
    firstName: Yup.string().required('Prénom requis'),
    birthDate: Yup.date().required('Date de naissance requise'),
  });

  const handleSubmit = values => {
    console.info(values);
    onNextStep(values);
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
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder="Nom d'utilisateur"
            />
            {errors.username && touched.username && (
              <Text>{errors.username}</Text>
            )}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              placeholder="Nom"
            />
            {errors.lastName && touched.lastName && (
              <Text>{errors.lastName}</Text>
            )}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              placeholder="Prénom"
            />
            {errors.firstName && touched.firstName && (
              <Text>{errors.firstName}</Text>
            )}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('birthDate')}
              onBlur={handleBlur('birthDate')}
              value={values.birthDate}
              placeholder="Date de naissance"
            />
            {errors.birthDate && touched.birthDate && (
              <Text>{errors.birthDate}</Text>
            )}

            <Button
              onPress={formikSubmit} // Utilisation de la fonction renommée
              title="Suivant"
              disabled={!dirty || !isValid}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
InscriptionStep1.propTypes = {
  onNextStep: PropTypes.func.isRequired,
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
});

export default InscriptionStep1;
