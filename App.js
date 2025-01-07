import React from 'react';
import { View, Button, Alert } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const handlePayment = () => {
    const options = {
      description: 'Test Transaction',
      image: 'https://your-logo-url.com/logo.png', // optional logo
      currency: 'INR',
      key: 'rzp_test_epPmzNozAIcJcC', // Replace with your Razorpay Key ID
      amount: '50000', // Amount in paise (50000 paise = ₹500)
      name: 'Naticoco',
      prefill: {
        email: 'test@example.com',
        contact: '9876543210',
        name: 'Test User',
      },
      theme: { color: '#F37254' },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // Handle successful payment
        Alert.alert('Payment Success', `Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // Handle payment failure
        Alert.alert('Payment Failed', error.description);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

export default App;
