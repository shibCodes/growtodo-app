
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Font } from 'expo';

export class PageListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            buttonActive: false
        };
    }
    
    static navigationOptions = {
        header: null,
        headerMode: 'none'
    };

    async componentWillMount() {
        await Font.loadAsync({
            Neucha: require('../assets/fonts/Neucha.ttf'),
            OverpassMonoBold: require('../assets/fonts/OverpassMonoBold.ttf'),
            OverpassMonoRegular: require('../assets/fonts/OverpassMonoRegular.ttf'),
        });
        this.setState({ loading: false });
    }


    render() {

        if (this.state.loading) {
            return (
                <View style={styles.screen}>
                    <Text style={styles.loading}>loading...</Text>
                </View>
            );
        }
        else {
            return (
                <View style={styles.screen}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>GROW</Text>
                    </View>
                    <View style={styles.plantContainer}>
                        <Image style={styles.plantImage} source={require('../assets/img/placeholder.gif')} resizeMode="contain" />
                    </View>
                    <View style={styles.list}>
                        <ScrollView>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                            <Text style={styles.listText} >yooo</Text>
                        </ScrollView>
                    </View>
                </View>
            );
        }    
    }
}

///////////////////////////
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'black',
        color: 'white',
        paddingTop: 28
    },
    header: {
        flex: 0.1,
        maxHeight: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Neucha'
    },
    plantContainer: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        //alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 1
        
    },
    list: {
        flex: 0.6,
        borderColor: 'red',
        borderWidth: 1,
    },
    listText: {
        fontSize: 16,
        fontFamily: 'OverpassMonoRegular',
        color: 'white',
        borderColor: 'red',
        borderWidth: 1
    },
    plantImage: {
        flex: 0.5,
        height: undefined,
        width: undefined,
        borderColor: 'yellow',
        borderWidth: 1
    }

});