import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Loader from "../components/Loader";

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const openLink = async (url: string) => {
    setLoading(true);
    try {
      const canOpen = await Linking.openURL(url);
      if (!canOpen) {
        console.log("Couldn't open link:", url);
      } else {
        console.log("Opened link:", url);
      }
    } catch (err) {
      console.error("Error opening link:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/v2/D5603AQEnc49rZvVQJQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731493829582?e=1737590400&v=beta&t=fbQCiTYfcx05oz3Oeujt3h7R8VTYOGox-aLf6piK5jg"
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Martinus Ade Meidyan</Text>
          <Text style={styles.bio}>Software Developer | Tech Enthusiast</Text>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink("https://github.com/mosoksehbro")}
          >
            <Text style={styles.linkText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink("https://www.linkedin.com/in/martinus-ade-meidyan-636791130/")}
          >
            <Text style={styles.linkText}>LinkedIn</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    padding: 20,
    gap: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    
  },
  linkButton: {
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
