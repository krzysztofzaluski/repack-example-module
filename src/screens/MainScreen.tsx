import * as React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/Navigation';
import Colors from '../styles/Colors';

const MainScreen = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const onPressList = () => {
        navigation.navigate('List');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Strona główna</Text>
            <TouchableOpacity style={styles.grayButton} onPress={onPressList}>
                <Text style={styles.buttonText}>Lista</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    grayButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MainScreen;
