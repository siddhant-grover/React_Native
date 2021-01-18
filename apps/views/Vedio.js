import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';


export class Video extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { listLoaded: false };
    }

    componentDidMount(){
        return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyDCC-j7LvM4mVh5Tzp9j0jLQLpQ17JxzEs') //with search as operation, part=snippet,q is the term we search vedio for, type = vedio returned,pi key 
        .then((response) => response.json())//gets resp from yt and passes to json method ,  data parsed to object
        .then((responseJson)=> {//this accepts the response from the json method 
            this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items) //transforms our response to an array , by responseJson.items we r drilling down to actual array of vids
            })    
        })
        .catch((error) =>{
            console.error(error);
        });    
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                { this.state.listLoaded && (
                    <View style={{ paddingTop: 30}}>
                        <FlatList 
                            data={ this.state.videoList }//flatList only accepts an array    
                            renderItem={({item}) => 
                                <TubeItem
                                    navigate = {navigate} 
                                    id={item.id.videoId} 
                                    title={item.snippet.title} 
                                    imageSrc={item.snippet.thumbnails.high.url}
                                />
                            }
                        />
                    </View>
                )}
                
                { !this.state.listLoaded && (
                    <View style={{ paddingTop: 30}}>
                        <Text> LOADING </Text>
                    </View>
                )}      

            </View>    
        );    
    } 

}

export class TubeItem extends React.Component {
    
    onPress = () => {
        this.props.navigate('VideoDetailRT', {ytubeId: this.props.id} );// {ytubeId: this.props.id}  passing completely optional param with navigate, can be read by Detail component
       
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{ paddingTop: 20, alignItems: 'center'}}>
                    <Image
                        style={{width: '100%', height: 200}}
                        source={{ uri: this.props.imageSrc }}
                    />
                    <Text >
                        {this.props.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}