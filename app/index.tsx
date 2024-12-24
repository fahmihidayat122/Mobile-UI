import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Index() {
  const navigation = useNavigation();
  return (
    <ImageBackground 
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_2t/16540.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Selamat Datang</Text>
          <Text style={styles.subtitle}>Di Top-up Game</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://4kwallpapers.com/images/wallpapers/ea-sports-fc-25-3840x2160-17732.jpg' }} 
            style={styles.image} 
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('home/game')}>
            <Text style={styles.buttonText}>Mulai</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 28,
    color: '#e0e0e0',
    marginTop: 10,
  },
  imageContainer: {
    marginVertical: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#6a11cb',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
