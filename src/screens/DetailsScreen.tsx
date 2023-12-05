import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/Navigation';

interface DetailsScreenProps {
    route: RouteProp<RootStackParamList, 'Details'>;
    navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>;
}

const DetailsScreen = ({route}: DetailsScreenProps) => {
    const {item} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>Data: {item.date}</Text>
            <Text style={styles.price}>Cena: {item.price}</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        marginBottom: 10,
    },
    date: {
        fontSize: 16,
    },
});

export default DetailsScreen;
