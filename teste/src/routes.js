import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/home/Index';
import Buscar  from './pages/buscar/buscar';
import AddTrabalho from './pages/addtrabalho/addtrabalho';
import Favoritos from './pages/favoritos/favoritos';
import Notificacao from './pages/notificacao/notificacao';
import Perfil from './pages/perfil/perfil';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function Routes() {
    return(

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="Home"
                component={Home}
                />
            <Tab.Screen
                name="AddTrabalho"
                component={AddTrabalho}
                />
                <Tab.Screen
                name="Favoritos"
                component={Favoritos}
                />
            <Tab.Screen
                name="Buscar"
                component={Buscar}
                />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                />
            <Tab.Screen
                name="Notificacao"
                component={Notificacao}
                />
            </Tab.Navigator>
            
        </NavigationContainer>
    )
}

export default Routes;