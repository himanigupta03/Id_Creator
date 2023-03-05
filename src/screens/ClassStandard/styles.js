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

    
///////////////// for dropdown ///////////

dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: '90%',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },


})
export default styles;