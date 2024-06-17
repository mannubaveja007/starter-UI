import { React, useState } from 'react';
import { Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';

type Pro = {
  age: number,
  name: string,
  from: string,
  to: string,
  amt: number;
};

const Payments = () => {
  const [isValid, setisValid] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [amount, setAmount] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');

  return (
    <View>
      <Text> Payme solutions </Text>
      <Text> 1. New and latest </Text>
      <Text> 2. Crypto Currency </Text>
      <Text> 3. Trustable </Text>
      <Text> 4. Approved by government </Text>

      <Text> Do a Quick Payment </Text>
      <Text> Your Name : </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text> Welcome {name} </Text>
      <Text> Your Age : </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <Text> Amount : </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setAmount(text)}
        value={amount}
      />
      <Text> From wallet address : </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setFromAddress(text)}
        value={fromAddress}
      />
      <Text> to : </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setToAddress(text)}
        value={toAddress}
      />

      <TouchableOpacity
        onPress={() => {
          setisValid(false);
        }}
      >
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/send-button-line-outline-icon-isolated-white-vector-illustration-236363682.jpg",
          }}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>

      {isValid ? (
        <Text />
      ) : (
        <Text style={{ color: 'green', fontSize: 24 }}>Transaction Successful!!</Text>
      )}
    </View>
  );
};

export default Payments;