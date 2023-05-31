import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

const Header = (props) => {
  return (
    <View style={[styles.header, { backgroundColor: props.couleurFond }]}>
      <Text style={styles.title}>{props.titre}</Text>
    </View>
  );
};
const UpperView = (props) => {
  return (
    <View style={styles.upperView}>
      <Text
        style={{
          paddingLeft: 40,
          fontWeight: "bold",
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        Id:{" "}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="ID de l'élève"
      ></TextInput>
      <Text style={styles.studentSelection}>{props.selectionEtudiant}</Text>
      <TouchableOpacity style={styles.button1} onPress={""}>
        <Text>Sélectionner un étudiant</Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "red",
          alignSelf: "center",
          paddingTop: 10,
          paddingBottom: 30,
        }}
      >
        {props.confirmation}
      </Text>
    </View>
  );
};
const LowerView = (props) => {
  return (
    <View style={styles.lowerView}>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Session: </Text>
      <TextInput style={styles.textInput2} placeholder="0"></TextInput>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>
        Enregistrer élève au cours:{" "}
      </Text>
      <TextInput
        style={styles.textInput2}
        placeholder="Code de cours"
      ></TextInput>
      <TouchableOpacity
        style={[styles.button2, { marginTop: 30 }]}
        onPress={""}
      >
        <Text style={{ textAlign: "center" }}>Enregistrer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button2, { marginTop: 30 }]}
        onPress={""}
      >
        <Text style={{ textAlign: "center" }}>Afficher</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  const [items, setItems] = useState([]);

  const fetchTasks = () => {
    fetch(
      "https://github.com/allanjoshuaf/ProjetFinalDanyAllan/blob/main/ProjetFinalDanyAllan.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setItems(json.etudiants);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <Header titre="inscription aux cours" couleurFond="orange" />
      <UpperView
        selectionEtudiant="Aucun étudiant sélectionné"
        confirmation="Confirmez votre sélection"
      ></UpperView>
      <View style={styles.separator}></View>
      <LowerView></LowerView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "blue",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  couleurFond: {
    backgroundColor: "blue",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 40,
    borderRadius: 5,
  },
  upperView: {
    backgroundColor: "lightgreen",
    flex: 1,
  },
  studentSelection: {
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  button1: {
    backgroundColor: "lightblue",
    alignSelf: "center",
    borderColor: "blue",
    borderWidth: 1,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  lowerView: {
    flex: 2,
  },
  textInput2: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: "lightblue",
    alignSelf: "center",
    borderColor: "blue",
    borderWidth: 1,
    alignSelf: "stretch",
    marginVertical: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
  separator: {
    borderWidth: 2,
    borderColor: "black",
  },
});
