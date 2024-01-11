import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreenPrincipal from '../pages/HomeScreenPrincipal';
// Importez vos autres écrans ici
import MyProfil from '../pages/DrawerPages/MyProfilScreen';
import Evenements from '../pages/DrawerPages/EvenementsScreen';
import Membres from '../pages/DrawerPages/MembresScreen';
import Postes from '../pages/DrawerPages/PostesScreen';
import Calendrier from '../pages/DrawerPages/CalendrierScreen';
import CreerEvenement from '../pages/DrawerPages/CreateEventScreen';
import Actualites from '../pages/DrawerPages/ActualitesScreen';
import InviterAmis from '../pages/DrawerPages/InvitFreindsScreen';
import TermsAndConditions from '../pages/DrawerPages/TermsAndConditionsScreen';
import Deconnexion from '../pages/DrawerPages/DeconnexionScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="HomePrincipal">
      <Drawer.Screen name="HomePrincipal" component={HomeScreenPrincipal} />
      <Drawer.Screen name="Mon Profil" component={MyProfil} />
      <Drawer.Screen name="Événements" component={Evenements} />
      <Drawer.Screen name="Membres" component={Membres} />
      <Drawer.Screen name="Postes" component={Postes} />
      <Drawer.Screen name="Calendrier" component={Calendrier} />
      <Drawer.Screen name="Créer Événement" component={CreerEvenement} />
      <Drawer.Screen name="Actualités" component={Actualites} />
      <Drawer.Screen name="Inviter des Amis" component={InviterAmis} />
      <Drawer.Screen
        name="Terms and Conditions"
        component={TermsAndConditions}
      />
      <Drawer.Screen name="Déconnexion" component={Deconnexion} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
