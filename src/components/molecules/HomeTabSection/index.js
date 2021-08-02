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
        style={{ backgroundColor: 'white' }}
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
    return (
        <View style={{ paddingTop: 8 }}>
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy2} />
            <ItemListFood image={FoodDummy3} />
            <ItemListFood image={FoodDummy4} />
        </View>
    )
};

const Popular = () => {
    return (
        <View style={{ paddingTop: 8 }}>
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy2} />
            <ItemListFood image={FoodDummy3} />
            <ItemListFood image={FoodDummy4} />
        </View>
    )
};

const Recommended = () => {
    return (
        <View style={{ paddingTop: 8 }}>
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy2} />
            <ItemListFood image={FoodDummy3} />
            <ItemListFood image={FoodDummy4} />
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
        />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({})
