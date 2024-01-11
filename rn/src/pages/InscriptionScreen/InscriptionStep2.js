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

const InscriptionStep2 = ({onNextStep, onPreviousStep}) => {
  const initialValues = {
    address: '',
    email: '',
    phone: '',
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().required('Adresse requise'),
    email: Yup.string().email('Email invalide').required('Email requis'),
    phone: Yup.string().required('Téléphone requis'),
  });

  const handleSubmit = values => {
    console.error(values);
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
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
              placeholder="Adresse"
            />
            {errors.address && touched.address && <Text>{errors.address}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              placeholder="E-mail"
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              keyboardType="phone-pad"
              placeholder="Téléphone"
            />
            {errors.phone && touched.phone && <Text>{errors.phone}</Text>}

            <View style={styles.buttonContainer}>
              <Button onPress={onPreviousStep} title="Retour" />
              <Button
                onPress={formikSubmit}
                title="Suivant"
                disabled={!dirty || !isValid}
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
InscriptionStep2.propTypes = {
  onNextStep: PropTypes.func.isRequired,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default InscriptionStep2;
