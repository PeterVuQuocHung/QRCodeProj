import React, { Component } from 'react';
import {
  View,Text,TextInput,StyleSheet
} from 'react-native';

// 1. Import 
import {QRCode, Canvas} from 'easyqrcode-react-native';


class App extends  Component{
    
    // 3. Generate QRCode
    generateQRCode = (canvas) => {
        if (canvas !== null){
            // QRCode options
            var options = {
                text: "Hello world,www.easyproject.cn/donation",
        	};
        	// Create QRCode Object
        	var qrCode = new QRCode(canvas, options);
        }
      }
    
   render() { 
      return (
          <View style={{justifyContent:'center',padding:20}}>
          <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold',color:'red'}}>QR Code example</Text>
          <TextInput
            style={styles.input}
<<<<<<< HEAD
            placeholder="1st TextInput"
            
          />
          <TextInput
            style={styles.input}
            placeholder="2nd TextInput"
=======
            placeholder="Type here to test"
            placeholderTextColor='yellow'
>>>>>>> 7008ec2170700aaa9cb75ef4e0e897386446d667
            
          />
          <Text>QR Code axample</Text>
            {/* 2. QRCode Canvas  */}
            <Canvas  ref={this.generateQRCode}/>
          </View>
      );
  }
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});

export default App;