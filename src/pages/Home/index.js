import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FoodDummy1, FoodDummy2, FoodDummy3 } from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components';

const Home = () => {
    return (
        <View style={styles.page}>
            <HomeProfile />
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.foodCardContainer}>
                        <Gap width={24} />
                        <FoodCard image={FoodDummy1} />
                        <FoodCard image={FoodDummy3} />
                        <FoodCard image={FoodDummy2} />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.tabContainer}>
                <HomeTabSection />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    foodCardContainer: {
        flexDirection: 'row',
        marginVertical: 24
    },
    tabContainer: {
        flex: 1
    }
})
