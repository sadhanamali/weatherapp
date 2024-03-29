import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import PropTypes from 'prop-types';

export default class SearchInput extends React.Component {
  static propTypes = {
    onSubmit:PropTypes.func.isRequired,
    placeholder:PropTypes.string,
  };

  static defaultProps ={
    placeholder:'',
  }
  state={
    text:'',
  }
 handleChangeText=text=>{
   this.setState({ text });
 };
 
 handleSubmitEditing = () => { 
      const { onSubmit } = this.props;
      const { text } = this.state;
      if (!text) return;
      onSubmit(text);
      this.setState({ text: '' }); 
  };

  render(){
  const{ onSubmit }=this.props;
  const{text}=this.state;
  return(
    <View style={styles.container}>
    
      <TextInput
      autoCorrect={false}
      value={text}
      placeholder={placeholder}
      placeholderTextColor="white"
      underlineColorAndroid="transpernt"
      style={styles.textInput}
      clearButtonMode="always"
      onChangeText={this.handleChangeText}
      onSubmitEditing={this.handleSubmitEditing}/>
      </View>
    );
  }
  
  render() {
      const {placeholder} = this.props;
      const {text} = this.state;
    return (
      <View style={styles.container} behavior="padding">
        <TextInput
          style={styles.textInput}
          value={text}
          underlineColorAndroid="transparent"
          clearButtonMode="always"
          placeholder={placeholder}
          autoCorrect={false}
          placeholderTextColor="white"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#666",
    borderRadius: 5,
    height: 40,
    marginTop: 20,
    paddingHorizontal: 10
  },
  textInput: {
    flex: 1,
    color: "white"
  }
});
