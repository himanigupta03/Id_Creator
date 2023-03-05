const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
   parentContainer: {
        width: '90%',
        height: 55,
        margin: 12,
        borderWidth: 1,
        paddingTop: 1,
        borderColor: '#cccccc',
        borderRadius: 6,
        //backgroundColor: 'coral',
        flexDirection: 'row',
    },
    input: {
        flex: 16,
        color: 'black',
        //margin: 20,
    },
    icon: {
        flex: 5,
    },
});

export default styles;