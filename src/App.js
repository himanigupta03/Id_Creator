import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './screens/Signin/Signin';
import Studentname from './screens/StudentName/Studentname';
import Registration from './screens/Registration/Registration';
import ClassStandard from './screens/ClassStandard/ClassStandard';
import SelectSection from './screens/SelectSection/SelectSection';
import BloodGroup from './screens/BloodGroup/Bloodgroup';
import StudentPhoto from './screens/StudentPhoto/StudentPhoto';
import DOB from './screens/DOB/DOB';
import PreviewScreen from './screens/PreviewScreen/PreviewScreen';


const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                name="loginStack"
                screenOptions={{
                    headerShown: true,
                }}>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Studentname" component={Studentname} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Class Standard" component={ClassStandard} />
                <Stack.Screen name="Select Section" component={SelectSection} />
                <Stack.Screen name="Blood Group" component={BloodGroup} />
                <Stack.Screen name="DOB" component={DOB} />
                <Stack.Screen name="Student Photo" component={StudentPhoto} />
                <Stack.Screen name="Preview Screen"  component={PreviewScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
