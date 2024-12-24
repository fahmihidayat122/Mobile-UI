import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";


export default function Game() {
    const navigation = useNavigation();
  const [selectedGame, setSelectedGame] = useState("Free Fire");
  const [diamondAmount, setDiamondAmount] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [server, setServer] = useState("");
  const [email, setEmail] = useState("");

  return (
    <ImageBackground 
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_2t/16540.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Game Top-Up</Text>

        {/* Game Selection */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Game</Text>
          <Picker
            selectedValue={selectedGame}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedGame(itemValue)}
          >
            <Picker.Item label="Free Fire" value="Free Fire" />
            <Picker.Item label="Mobile Legends" value="Mobile Legends" />
            <Picker.Item label="PUBG Mobile" value="PUBG Mobile" />
          </Picker>
        </View>

        {/* Diamond Amount */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Jumlah Diamond</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Masukkan jumlah diamond"
            value={diamondAmount}
            onChangeText={(text) => setDiamondAmount(text)}
          />
        </View>

        {/* Player ID */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>ID Pemain</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan ID Pemain"
            value={playerId}
            onChangeText={(text) => setPlayerId(text)}
          />
        </View>

        {/* Server */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Server</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan server"
            value={server}
            onChangeText={(text) => setServer(text)}
          />
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={()  => navigation.navigate('home/transaksi')}>
          <Text style={styles.submitText}>Submit</Text>
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
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
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
