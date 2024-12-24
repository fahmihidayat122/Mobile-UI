import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TransactionHistory() {
  const navigation = useNavigation();

  const [transactionHistory, setTransactionHistory] = useState([
    {
      id: "1",
      game: "Free Fire",
      diamonds: 100,
      status: "Berhasil",
      date: "2024-12-20 14:30",
    },
    {
      id: "2",
      game: "Mobile Legends",
      diamonds: 200,
      status: "Gagal",
      date: "2024-12-19 10:15",
    },
    {
      id: "3",
      game: "PUBG Mobile",
      diamonds: 150,
      status: "Berhasil",
      date: "2024-12-18 18:45",
    },
  ]);

  const renderTransaction = ({ item }) => (
    <View style={[styles.transactionBox, item?.status === "Berhasil" ? styles.success : styles.failure]}>
      <Text style={styles.transactionItem}><Text style={styles.bold}>Game:</Text> {item?.game}</Text>
      <Text style={styles.transactionItem}><Text style={styles.bold}>Jumlah Diamond:</Text> {item?.diamonds}</Text>
      <Text style={styles.transactionItem}><Text style={styles.bold}>Status:</Text> {item?.status}</Text>
      <Text style={styles.transactionItem}><Text style={styles.bold}>Tanggal:</Text> {item?.date}</Text>
    </View>
  );

  return (
    <ImageBackground 
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_2t/16540.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Riwayat Transaksi</Text>

        <FlatList
          data={transactionHistory}
          renderItem={renderTransaction}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity style={styles.doneButton} onPress={() => navigation.goBack()}>
          <Text style={styles.doneText}>Selesai</Text>
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
    padding: 15,
    marginBottom: 15,
  },
  success: {
    borderLeftWidth: 5,
    borderLeftColor: "green",
  },
  failure: {
    borderLeftWidth: 5,
    borderLeftColor: "red",
  },
  transactionItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
  },
  doneButton: {
    backgroundColor: "#6a11cb",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  doneText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
