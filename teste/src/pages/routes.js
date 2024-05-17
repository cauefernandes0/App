import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './home/home';
import Buscar  from './buscar/buscar';
import AddTrabalho from './addtrabalho/addtrabalho';
import Favoritos from './favoritos/favoritos';
import Notificacao from './notificacao/notificacao';
import Perfil from './perfil/perfil';
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