import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, TextInput, Gap, Button } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../utils';

const SignUp = ({ navigation }) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log('form: ', form);
        dispatch({type: 'SET_REGISTER', value: form});
        navigation.navigate('SignUpAddress')
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
                <Header
                    title="Sign Up"
                    subTitle="Register and eat"
                    onBack={() => { }}
                />
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <View style={styles.borderPhoto}>
                            <View style={styles.photoContainer}>
                                <Text style={styles.addPhoto}>Add Photo</Text>
                            </View>
                        </View>
                    </View>
                    <TextInput
                        label="Full Name"
                        placeholder="Type your full name"
                        value={form.name}
                        onChangeText={(value) => setForm('name', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Email Address"
                        placeholder="Type your email address"
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Password"
                        placeholder="Type your password"
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)}
                        secureTextEntry
                    />
                    <Gap height={24} />
                    <Button
                        text="Continue"
                        onPress={onSubmit}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16
    },
    borderPhoto: {
        height: 110,
        width: 110,
        borderRadius: 110,
        borderWidth: 1,
        borderColor: '#8D92A3',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        height: 90,
        width: 90,
        borderRadius: 90,
        backgroundColor: '#f0f0f0',
        padding: 24,
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center'
    },
})
