//page de connexion
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,Modal,Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FranceFlag from '../assets/flags/france.png';
import EnglandFlag from '../assets/flags/england.png';
import logo from '../assets/images/LogoBg.png';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ConnexionScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('fr');
    const [selectedFlag, setSelectedFlag] = useState(FranceFlag);
    const [modalVisible, setModalVisible] = useState(false);

    const languages = [
        { label: 'Français', value: 'fr', image: FranceFlag },
        { label: 'English', value: 'en', image: EnglandFlag },
    ];

    const selectLanguage = (value, image) => {
        setSelectedLanguage(value);
        setSelectedFlag(image);
        setModalVisible(false);
    };
    return (

        <View style={styles.container}>
       <LinearGradient
                colors={['#1E90FF', '#00BFFF']}
                style={styles.background}
            />
            <View style={styles.languageSelector}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
                    <Image source={selectedFlag} style={styles.flag} />
                </TouchableOpacity>

                {/* Modal pour le sélecteur de langue */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalView}>
                        {languages.map((language, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.languageOption}
                                onPress={() => selectLanguage(language.value, language.image)}>
                                <Image source={language.image} style={styles.flag} />
                                <Text>{language.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </Modal>
            </View>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.text}></Text>
            </View>
        <View style={styles.footer}>
            <View style={styles.action}>
            <FontAwesome name="user-o" size={24} color="black" />
            <TextInput
                placeholder="Votre email"
                style={styles.textInput}
            />
            </View>
            <View style={styles.action}>
            <Entypo name="lock-open" size={24} color="black" />
            <TextInput
                placeholder="Votre mot de passe"
                style={styles.textInput}
            />
            </View>
            <TouchableOpacity>
            <Text style={styles.forgot}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <LinearGradient
                colors={['#1E90FF', '#00BFFF']}
                style={styles.signIn}
            >
                <Text style={styles.textSign}>Se connecter</Text>
                <AntDesign name="arrowright" size={24} color="white" />
            </LinearGradient>
            </TouchableOpacity>
            <View style={styles.signUp}>
            <Text style={styles.textSignUp}>Pas encore de compte ?</Text>
            <TouchableOpacity>
                <Text style={styles.textSignUp}>S'inscrire</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.social}>
            <TouchableOpacity style={styles.socialButton}>
                <Feather name="facebook" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                <MaterialIcons name="email" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                <MaterialCommunityIcons name="google" size={24} color="white" />
            </TouchableOpacity>
            </View>
        </View>
        </View>

    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: windowWidth > 500 ? 20 : 10,
        width: '100%',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },

    forgot: {
        color: '#0099ff',
        marginTop: 15,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },
    signUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    textSignUp: {
        color: '#0099ff',
        fontWeight: 'bold',
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
    },

    socialButton: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0099ff',
    },
    picker: {
        height: 50,
        width: 150,
    },
     modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    languageOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    flag: {
        width: 30,
        height: 20,
        //marginRight: 10,
    },
    button: {
        //backgroundColor: '#DDDDDD',
        padding: 10,
    },
    });

export default ConnexionScreen;
