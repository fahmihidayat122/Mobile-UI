import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function methodepembayaran() {
    const navigation = useNavigation();
  const paymentMethods = ["Credit Card", "PayPal", "Bank Transfer", "GoPay", "OVO"];

  return (
    <ImageBackground 
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_2t/16540.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Pilih Metode Pembayaran</Text>

        <View style={styles.paymentBox}>
          {paymentMethods.map((method, index) => (
            <TouchableOpacity key={index} style={styles.paymentButton}>
              <Text style={styles.paymentText}>{method}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={()  => navigation.navigate('home/riwayattransaksi')}>
          <Text style={styles.submitText}>Konfirmasi Pembayaran</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  paymentBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  paymentButton: {
    backgroundColor: "#6a11cb",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  paymentText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#6a11cb",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
