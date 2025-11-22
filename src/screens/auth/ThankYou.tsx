import React from "react";
import { 
  SafeAreaView, 
  View, 
  ImageBackground, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet,
  GestureResponderEvent 
} from "react-native";

interface ThankYouProps {
  // Add any props you might need
  onBackToHome?: (event: GestureResponderEvent) => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onBackToHome }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/sE8iZvpPof/rqafi1iv_expires_30_days.png" }} 
        resizeMode="stretch"
        style={styles.view}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.box} />
          <Text style={styles.text}>
            Thank You for Contacting ClicknBook Home!
          </Text>
          <View style={styles.view2}>
            <Text style={styles.text2}>
              we've received your details successfully.{"\n"}
              our team will get in touch with you soon to assist you further.{"\n"}
              we appreciate your interest in property listings your property with us!
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.buttonRow} 
            onPress={onBackToHome || (() => alert('Pressed!'))}
          >
            <Text style={styles.text3}>Back to home</Text>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/sE8iZvpPof/5j2gzz5b_expires_30_days.png" }} 
              resizeMode="stretch"
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.view3}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/sE8iZvpPof/afejr9ij_expires_30_days.png" }} 
              resizeMode="stretch"
              style={styles.image2}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    height: 42,
    backgroundColor: "#FFFFFF",
    marginBottom: 163,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8D800",
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 38,
    marginLeft: 24,
    marginRight: 8,
  },
  image: {
    borderRadius: 10,
    width: 24,
    height: 24,
  },
  image2: {
    borderRadius: 40,
    width: 323,
    height: 207,
  },
  scrollView: {
    flex: 1,
    borderRadius: 40,
  },
  text: {
    color: "#000000",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 31,
    marginHorizontal: 30,
  },
  text2: {
    color: "#979797",
    fontSize: 14,
    textAlign: "center",
    width: 271,
    lineHeight: 20,
  },
  text3: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 12,
  },
  view: {
    flex: 1,
  },
  view2: {
    alignItems: "center",
    marginBottom: 31,
  },
  view3: {
    alignItems: "flex-end",
  },
});

export default ThankYou;