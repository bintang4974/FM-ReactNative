import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Select, TextInput } from '../../components';
import { useForm } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';

const SignUpAddress = ({ navigation }) => {
    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Bandung',
    });

    const dispatch = useDispatch();
    const registerReducer = useSelector(state => state.registerReducer);

    const onSubmit = () => {
        console.log('form: ', form);
        const data = {
            ...form,
            ...registerReducer
        }
        console.log('data register: ', data);
        // navigation.replace('SuccessSignUp');
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
                <Header
                    title="Address"
                    subTitle="Make sure it's valid"
                    onBack={() => { }}
                />
                <View style={styles.container}>
                    <TextInput
                        label="Phone No."
                        placeholder="Type your phone number"
                        value={form.phoneNumber}
                        onChangeText={(value) => setForm('phoneNumber', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Address"
                        placeholder="Type your address"
                        value={form.address}
                        onChangeText={(value) => setForm('address', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="House No."
                        placeholder="Type your house number"
                        value={form.houseNumber}
                        onChangeText={(value) => setForm('houseNumber', value)}
                    />
                    <Gap height={16} />
                    <Select
                        label="City"
                        value={form.city}
                        onSelectChange={(value) => setForm('city', value)}
                    />
                    <Gap height={24} />
                    <Button
                        text="Sign Up Now"
                        onPress={onSubmit}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpAddress

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
})
