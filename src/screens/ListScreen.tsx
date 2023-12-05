import * as React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from '../types/List';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/Navigation';

const generateRandomDate = () => {
    const startDate = new Date(2023, 9, 1); // 01.10.2023
    const endDate = new Date(2023, 10, 1); // 01.11.2023
    const randomDate = new Date(
        startDate.getTime() +
            Math.random() * (endDate.getTime() - startDate.getTime()),
    );
    return randomDate.toISOString().split('T')[0]; // Format: 'YYYY-MM-DD'
};

const generateRandomTitle = () => {
    const cities: string[] = [
        'Warszawa',
        'Kraków',
        'Łódź',
        'Wrocław',
        'Poznań',
        'Gdańsk',
        'Szczecin',
        'Bydgoszcz',
        'Lublin',
        'Białystok',
        'Katowice',
        'Gdynia',
        'Częstochowa',
        'Radom',
        'Sosnowiec',
        'Toruń',
        'Kielce',
        'Rzeszów',
        'Olsztyn',
        'Opole',
    ];
    const randomCity1 = cities[Math.floor(Math.random() * cities.length)];
    const randomCity2 = cities[Math.floor(Math.random() * cities.length)];
    return `${randomCity1} -> ${randomCity2}`;
};

const generateRandomNumber = (): number => {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
};

const generateRandomData = () => {
    const data: ListItem[] = [];
    for (let i = 0; i < 50; i++) {
        data.push({
            date: generateRandomDate(),
            title: generateRandomTitle(),
            price: `${generateRandomNumber()} PLN`,
        });
    }
    data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });
    return data;
};

const ListScreen = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const data = generateRandomData();

    const onPressItem = (item: ListItem) => {
        navigation.navigate('Details', {item});
    };

    const renderItem = ({item}: {item: ListItem}) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onPressItem(item)}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>Cena: {item.price}</Text>
            </View>
            <Text style={styles.date}>{item.date}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        width: '100%',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: '#555',
        marginTop: 10,
    },
    date: {
        fontSize: 14,
        color: '#555',
    },
});

export default ListScreen;
