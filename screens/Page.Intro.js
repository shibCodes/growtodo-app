
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Font } from 'expo';

export class PageIntroComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("PROPS: ", this.props);
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
            OverpassMonoBold: require('../assets/fonts/OverpassMonoBold.ttf')
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
                    <View style={styles.topHalf}>
                        <Text style={styles.headingStyle}>GROW</Text>
                    </View>
                    <View style={styles.bottomHalf}>
                        <View style={styles.imageWrap}>
                            <Image style={styles.imageStyle} source={require('../assets/img/placeholder.gif')} resizeMode="contain" />
                        </View>
                        <View style={styles.buttonWrap}>
                            <TouchableOpacity style={[styles.buttonLetsGrow, this.state.buttonActive && styles.buttonLetsGrowActive]} activeOpacity={1} onPress={this.buttonPressed}>
                                <Text style={styles.letsGrowText}>let's grow</Text>
                            </TouchableOpacity>
                        </View>
                    </View>         
                </View>
            );
        }
        
    }

    buttonPressed = () => {
        console.log("button pressed!");
        this.state.buttonActive = true;

        console.log(this.state.buttonActive);

        this.props.navigation.navigate('ListScreen');       
    }
}

///////////////////////////
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        //borderColor: 'red',
        //borderWidth: 1,
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
    topHalf: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //borderColor: 'red',
        //borderWidth: 1,
    },
    bottomHalf: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
       // borderColor: 'red',
       // borderWidth: 1,
    },
    headingStyle: {
        fontFamily: 'Neucha',
        color: 'white',
        fontSize: 120
    },
    loading: {
        color: 'white'
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        ///borderColor: 'red',
        //borderWidth: 1
    },
    buttonLetsGrow: {
        flex: 0.8,
        backgroundColor: 'white',
        color: 'black',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    letsGrowText: {
        textAlign: 'center',
        fontFamily: 'OverpassMonoBold',
        fontSize: 20
    },
    buttonLetsGrowActive: {
        backgroundColor: 'red'
    },
    imageWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        //borderColor: 'red',
        //borderWidth: 1,
        flex: 0.7
    },
    imageStyle: {
        flex: 0.5,
        height: undefined,
        width: undefined,
        //borderColor: 'red',
        //borderWidth: 1
    },
    showEdges: {
        borderColor: 'red',
        borderWidth: 1
    }
});