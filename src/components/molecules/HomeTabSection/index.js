import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import ItemListFood from '../ItemListFood';

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

const NewTaste = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood rating={3} image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood rating={3} image={FoodDummy2} />
            <ItemListFood rating={3} image={FoodDummy3} />
            <ItemListFood rating={3} image={FoodDummy4} />
        </View>
    )
};

const Popular = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood rating={3} image={FoodDummy1} />
            <ItemListFood rating={3} image={FoodDummy3} />
            <ItemListFood rating={3} image={FoodDummy2} />
            <ItemListFood rating={3} image={FoodDummy4} />
        </View>
    )
};

const Recommended = () => {
    const navigation = useNavigation();
    
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood rating={3} image={FoodDummy1} />
            <ItemListFood rating={3} image={FoodDummy4} />
            <ItemListFood rating={3} image={FoodDummy2} />
            <ItemListFood rating={3} image={FoodDummy3} />
        </View>
    )
};

const HomeTabSection = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

    const renderScene = SceneMap({
        1: NewTaste,
        2: Popular,
        3: Recommended,
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

export default HomeTabSection

const styles = StyleSheet.create({})
