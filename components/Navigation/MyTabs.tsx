import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PageHome from '../HomeSection/PageHome';
import PagePerfil from '../MyPerfilSection/PagePerfil';
import PagePlants from '../PlantsListSection/PagePlants';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={PageHome} />
            <Tab.Screen name="Plants" component={PagePlants} />
            <Tab.Screen name="My Perfil" component={PagePerfil} />
        </Tab.Navigator>
    );
}