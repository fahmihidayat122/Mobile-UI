import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Transaksi() {
    const navigation = useNavigation();
  const [transaction, setTransaction] = useState({
    game: "Free Fire",
    diamonds: 100,
    playerId: "123456789",
    server: "Asia",
    email: "user@example.com",
    date: new Date().toLocaleString(),
  });

  return (
    <ImageBackground 
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_2t/16540.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Detail Transaksi</Text>

        <View style={styles.transactionBox}>
          <Text style={styles.transactionItem}><Text style={styles.bold}>Game:</Text> {transaction.game}</Text>
          <Text style={styles.transactionItem}><Text style={styles.bold}>Jumlah Diamond:</Text> {transaction.diamonds}</Text>
          <Text style={styles.transactionItem}><Text style={styles.bold}>ID Pemain:</Text> {transaction.playerId}</Text>
          <Text style={styles.transactionItem}><Text style={styles.bold}>Server:</Text> {transaction.server}</Text>
          <Text style={styles.transactionItem}><Text style={styles.bold}>Email:</Text> {transaction.email}</Text>
          <Text style={styles.transactionItem}><Text style={styles.bold}>Tanggal:</Text> {transaction.date}</Text>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={()  => navigation.navigate('home/methodepembayaran')}>
          <Text style={styles.submitText}>Konfirmasi</Text>
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
  transactionBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  transactionItem: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
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