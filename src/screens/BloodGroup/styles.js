import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // borderColor: 'red',
        //borderWidth: 5,
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    applogo: {
        width: '200%',
        height: 200,
        marginTop: 20,
    },

    SigninContainer: {
        textAlign: 'left',
        padding: 10,
        // borderColor: 'red',
        //borderWidth: 5,

    },

    SigninText: {
        fontWeight: 'bold',
        fontSize: 30,
    },

    plainText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        width: '90%',
        height: 55,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#cccccc',
        borderRadius: 6,
        color: 'black',
        backgroundColor: '#e5e5e5',
    },
})

export default styles;