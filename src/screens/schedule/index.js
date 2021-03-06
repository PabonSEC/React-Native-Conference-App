import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './style';

import FloatingButton from '../../components/FloatingButton';

class ScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 50,
                    }}>
                    <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 18 }}>
                        This is ScheduleScreen
                    </Text>

                    <FloatingButton style={{ bottom: 40, right: 30 }} />
                </View>
            </>
        );
    }

}

const Stack = createStackNavigator();

function StackScheduleScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Schedule"
                component={ScheduleScreen}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#2c3e50',
                    },
                    headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    //     fontFamily: 'Ubuntu-Bold'
                    // },
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => {
                            navigation.openDrawer();
                        }}>
                            <Icon name="md-list-box" color="#fff" size={32} />
                        </TouchableOpacity>
                    ),
                    // headerTitle instead of title
                    headerTitle: () => <Text style={[styles.text, { fontSize: 20 }]}>Schedule</Text>,
                })}
            />
        </Stack.Navigator>
    );
}

export default StackScheduleScreen;

// export default function StackScheduleScreen({ navigation }) {
//     console.log(navigation);
//     return (
//         <StackNavigator stackName="Schedule" stackComponent={ScheduleScreen} />
//     )
// }