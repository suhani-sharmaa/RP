import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, Pressable } from "react-native";
 
interface Props {
  onNext?: () => void;
  onSkip?: () => void;
}
 
export default function IPhone1619(props: Props) {
  const { onNext, onSkip } = props;
 
  function handleSkip() {
    if (typeof onSkip === "function") {
      onSkip();
      return;
    }
    console.log("Skip pressed");
  }
 
  function handleNext() {
    if (typeof onNext === "function") {
      onNext();
      return;
    }
    console.log("Next pressed");
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <View style={styles.column}>
          <Image
            source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/sE8iZvpPof/pk5lbdl9_expires_30_days.png"}}
            resizeMode = {"stretch"}
            style={styles.image}
          />
          <Text style={styles.text1}>
            {"Get Your Home"}
          </Text>
          <Text style={styles.absoluteText}>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </Text>
        </View>
        <View style={styles.row}>
          <Pressable onPress={handleSkip} style={styles.text}>
            <Text style={styles.buttonText}>{"Skip"}</Text>
          </Pressable>
          <View style={styles.row2}>
            <View style={styles.row3}>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
              <View style={styles.box2}>
              </View>
            </View>
            <Pressable onPress={handleNext} style={[styles.text, { backgroundColor: "#FFD700", borderColor: "#FFD700" }]}>
              <Text style={[styles.buttonText, { color: "#000000" }]}>{"Next"}</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  absoluteText: {
    position: "absolute",
    bottom: -85,
    right: 36,
    left: 36,
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
  },
  box: {
    width: 32,
    height: 4,
    backgroundColor: "#000000",
    borderRadius: 2,
    marginRight: 12,
  },
  box2: {
    width: 32,
    height: 4,
    backgroundColor: "#B50E00",
    borderRadius: 2,
  },
  column: {
    marginBottom: 246,
  },
  image: {
    borderRadius: 40,
    height: 380,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 65,
    marginHorizontal: 36,
    marginTop: -40,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  row3: {
    flexDirection: "row",
    marginRight: 20,
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFDD32",
    borderRadius: 40,
  },
  text: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: "#EFEFEF",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: '600',
  },
  text1: {
  fontSize: 34,        // bigger
  fontWeight: "700",   // bold
  textAlign: "center", // center horizontally
  color: "#000000",
  marginTop: 24,
  marginBottom: 16,
},
 
});
 
