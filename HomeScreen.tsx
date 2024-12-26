import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated, // Import Animated
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from "react-native-animatable";

// Define navigation types for HomeScreen
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [scrollY] = useState(new Animated.Value(0)); // Animated value untuk scroll
  const [bottomBarVisible, setBottomBarVisible] = useState(true);

  // Detect scroll direction
  const handleScroll = (event: any) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;

    // Jika scroll ke bawah, sembunyikan bottom bar
    if (contentOffsetY > 100 && bottomBarVisible) {
      setBottomBarVisible(false); // Hide bottom bar
    } else if (contentOffsetY < 100 && !bottomBarVisible) {
      setBottomBarVisible(true); // Show bottom bar
    }
  };

  // Animated style untuk bottom bar
  const bottomBarTranslateY = scrollY.interpolate({
    inputRange: [0, 100], // Nilai scroll di mana bottom bar bergerak
    outputRange: [0, 100], // Bergerak ke bawah sebanyak 100 piksel
    extrapolate: "clamp", // Menghentikan animasi setelah mencapai batas
  });

  // Sample animal data for navigation
  const dogData = {
    name: "Doggo",
    type: "Dog",
    owner: "John Doe",
    dateTaken: "2024-11-11",
  };

  const catData = {
    name: "Whiskers",
    type: "Cat",
    owner: "Jane Doe",
    dateTaken: "2024-11-11",
  };

  const rabbitData = {
    name: "Floppy",
    type: "Rabbit",
    owner: "Alice Doe",
    dateTaken: "2024-11-11",
  };

  return (
    <LinearGradient
      colors={["#87A2FF", "#C0EBA6"]} // Warna gradien
      style={{ flex: 1 }} // Pastikan gradien mengisi seluruh layar
    >
      <ScrollView
        style={styles.container}
        onScroll={handleScroll} // Track scroll event
        scrollEventThrottle={16} // Perbarui animasi setiap 16ms
      >
        {/* Banner Image with Animation */}
        <Animatable.Image
          source={require("../assets/icon/heading.png")}
          style={styles.inves}
          animation="zoomIn"
          duration={1000}
        />

        {/* Welcome Text */}
        <Animatable.Text
          animation="zoomIn"
          duration={1000}
          style={styles.title}
        >
          Selamat Datang Di Rumah Hewan! {"\n"} 🐈🐕🐇
        </Animatable.Text>

        {/* Dog Section */}
        <Animatable.View
          animation="zoomIn"
          duration={1000}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Dog Animal Data</Text>
          <View style={styles.imageRow}>
            <Animatable.Image
              source={require("../assets/icon/dog1.png")}
              style={styles.image}
              animation="pulse"
              iterationCount="infinite"
              delay={200} // Delay untuk gambar pertama
              duration={1000}
            />
            <Animatable.Image
              source={require("../assets/icon/dog2.png")}
              style={styles.image}
              animation="pulse"
              iterationCount="infinite"
              delay={400} // Delay untuk gambar kedua
              duration={1000}
            />
            <Animatable.Image
              source={require("../assets/icon/dog3.png")}
              style={styles.image}
              animation="pulse"
              iterationCount="infinite"
              delay={600} // Delay untuk gambar ketiga
              duration={1000}
            />
          </View>
          <Button
            title="Manage"
            onPress={() => navigation.navigate("Dog", { animal: dogData })}
            color="#219B9D"
          />
        </Animatable.View>

        {/* Cat Section */}
        <Animatable.View
          animation="zoomIn"
          duration={1000}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Cat Animal Data</Text>
          <View style={styles.imageRow}>
            <Animatable.Image
              source={require("../assets/icon/kucing1.png")}
              style={styles.image}
              animation="pulse"
              iterationCount="infinite"
              delay={200} // Delay untuk gambar pertama
              duration={1000}
            />
            <Animatable.Image
              source={require("../assets/icon/kucing2.png")}
              style={styles.image}
              animation="pulse"
              iterationCount="infinite"
              delay={400} // Delay untuk gambar kedua
              duration={1000}
            />
            <Animatable.Image
              source={require("../assets/icon/kucing3.png")}
              style={styles.image}
              animation="pulse"
              iterationCount="infinite"
              delay={600} // Delay untuk gambar ketiga
              duration={1000}
            />
          </View>
          <Button
            title="Manage"
            onPress={() => navigation.navigate("Cat", { animal: catData })}
            color="#219B9D"
          />
        </Animatable.View>

        {/* Rabbit Section */}
        <Animatable.View
          animation="zoomIn"
          duration={1000}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Rabbit Animal Data</Text>
          <View style={styles.imageRow}>
            <Animatable.Image
              source={require("../assets/icon/rabbit1.png")}
              style={styles.image}
              animation="pulse"
              iterationCount="infinite"
              delay={200} // Delay untuk gambar pertama
              duration={1000}
            />
            <Animatable.Image
              source={require("../assets/icon/rabbit2.png")}
              style={styles.image}
              animation="pulse"
              iterationCount="infinite"
              delay={400} // Delay untuk gambar kedua
              duration={1000}
            />
            <Animatable.Image
              source={require("../assets/icon/rabbit3.png")}
              style={styles.image}
              animation="pulse"
              iterationCount="infinite"
              delay={600} // Delay untuk gambar ketiga
              duration={1000}
            />
          </View>
          <Button
            title="Manage"
            onPress={() =>
              navigation.navigate("Rabbit", { animal: rabbitData })
            }
            color="#219B9D"
          />
        </Animatable.View>
      </ScrollView>

      {/* Footer Navigation with animated bottom bar */}
      <Animated.View
        style={[
          styles.imageRowSmall,
          { transform: [{ translateY: bottomBarTranslateY }] }, // Apply animated position to bottom bar
        ]}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/icon/home.png")}
            style={styles.smallImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/icon/MENUUN.png")}
            style={styles.smallImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Titipan")}>
          <Image
            source={require("../assets/icon/note.png")}
            style={styles.smallImage}
          />
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 60,
  },
  inves: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    elevation: 10,
    objectFit: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  section: { marginVertical: 30 },
  sectionTitle: { fontSize: 16, marginBottom: 5, fontWeight: "600" },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    elevation: 8,
  },
  imageRowSmall: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 8,
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    elevation: 8,
  },
  smallImage: {
    width: 24, // Smaller size for bottom images
    height: 24,
    borderRadius: 0,
  },
});

export default HomeScreen;
