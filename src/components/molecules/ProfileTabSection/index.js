import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import ItemListMenu from '../ItemListMenu';

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{
            backgroundColor: '#020202',
            height: 3,
            // width: '15%',
            // marginLeft: '3%'
        }}
        style={{
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomColor: '#F2F2F2',
            borderBottomWidth: 1
        }}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{
                fontFamily: 'Poppins-Medium',
                color: focused ? '#020202' : '#8D92A3'
            }}>
                {route.title}
            </Text>
        )}
    />
);

const Account = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListMenu text="Edit Profile" />
            <ItemListMenu text="Home Address" />
            <ItemListMenu text="Security" />
            <ItemListMenu text="Payments" />
        </View>
    )
};

const FoodMarket = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListMenu text="Rate App" />
            <ItemListMenu text="Help Center" />
            <ItemListMenu text="Privacy & Policy" />
            <ItemListMenu text="Terms & Conditions" />
        </View>
    )
};

const ProfileTabSection = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'FoodMarket' },
    ]);

    const renderScene = SceneMap({
        1: Account,
        2: FoodMarket,
    });

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={{ backgroundColor: 'white' }}
        />
    )
}

export default ProfileTabSection

const styles = StyleSheet.create({})
