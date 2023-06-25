import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PageHome from '../HomeSection/PageHome';
import PagePlants from '../PlantsListSection/PagePlants';
import PagePreferences from '../MyPreferencesSection/PagePreferences';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={PageHome} />
            <Tab.Screen name="Plants" component={PagePlants} />
            <Tab.Screen name="My Perfil" component={PagePreferences} />
        </Tab.Navigator>
    );
}