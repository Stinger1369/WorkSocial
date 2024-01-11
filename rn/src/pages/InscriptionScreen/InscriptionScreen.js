import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import InscriptionStep1 from './InscriptionStep1';
import InscriptionStep2 from './InscriptionStep2';
import InscriptionStep3 from './InscriptionStep3';

const InscriptionScreen = () => {
  const navigate = useNavigation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onNextStep = newData => {
    setFormData({...formData, ...newData});
    setStep(step + 1);
  };
  const onPreviousStep = () => {
    setStep(step - 1);
  };
  const onFinalSubmit = async finalData => {
    const completeData = {...formData, ...finalData};

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(completeData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/ConnexionScreen');
      } else {
        console.error("Erreur lors de l'inscription:", data);
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };

  return (
    <View style={styles.container}>
      {step === 1 && <InscriptionStep1 onNextStep={onNextStep} />}
      {step === 2 && (
        <InscriptionStep2
          onNextStep={onNextStep}
          onPreviousStep={onPreviousStep}
        />
      )}
      {step === 3 && (
        <InscriptionStep3
          onFinalSubmit={onFinalSubmit}
          onPreviousStep={onPreviousStep}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default InscriptionScreen;
