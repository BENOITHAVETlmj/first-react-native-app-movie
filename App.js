/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

class App extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
        <View>
          <View style={styles.firstsection}>
            <View style={styles.topband}>
              <Image
                style={styles.image}
                resizeMode={"contain"}
                source={require("./ios/assets/img/imdb.png")}
              />
            </View>
          </View>
          {/*   1ER  SECTION  */}
          <View style={styles.movie}>
            <Text style={styles.title}>Les trois frères</Text>
            <View style={styles.categorie}>
              <Text style={styles.infos}>1995 </Text>
              <Text style={styles.infos}>1H45Min </Text>
              <Text style={styles.infos}>Comédie</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View>
                <Image
                  style={styles.poster}
                  source={require("./ios/assets/img/poster3freres.png")}
                />
              </View>
              <View style={{ flex: 1, padding: 10 }}>
                <Text style={styles.synopsis}>
                  Le même jour, 3 hommes découvrent qu'ils sont frères et
                  héritent de 3.000.000 de francs. Cependant, 10 jours plus
                  tard, l'héritage est détourné. Les 3 hommes découvrent qu'ils
                  doivent remplir certaines conditions pour toucher un héritage.
                  C'est ainsi que les ennuis commencent pour 3 frères qui n'ont
                  que faire d'être frères.
                </Text>
                <TouchableOpacity
                  style={styles.addbutton}
                  onPress={() => console.log("Pressed!")}
                >
                  <View>
                    <Text style={styles.addbuttontext}>
                      + Ajouter à la Watchlist
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.rating}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.star}
                  source={require("./ios/assets/img/star-yellow.png")}
                />
                <Text
                  style={{
                    color: "#ffff",
                    fontWeight: "bold"
                  }}
                >
                  9.7/10
                </Text>
                <Text style={{ color: "#ffff", fontSize: 7 }}>582,000</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.star}
                  source={require("./ios/assets/img/star-white.png")}
                />
                <Text style={{ color: "#ffff", fontWeight: "bold" }}>
                  Voter
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.meta}>93</Text>
                <Text
                  style={{ color: "#ffff", fontSize: 10, fontWeight: "bold" }}
                >
                  Metascore
                </Text>
                <Text style={{ color: "#ffff", fontSize: 7 }}>55 avis</Text>
              </View>
            </View>
          </View>
        </View>
        {/*   2 eme SECTION  */}

        <View style={styles.secondsection}>
          <View>
            <Text style={styles.casting}>Casting des acteurs</Text>
          </View>
          <ScrollView ScrollView horizontal={true}>
            <View style={styles.allacteurs}>
              <View style={styles.gallerieacteur}>
                <Image
                  style={styles.acteur}
                  resizeMode="cover"
                  source={require("./ios/assets/img/Campan.jpg")}
                />
                <View style={styles.acteurs}>
                  <Text style={styles.acteurtext}>Bernard Campan</Text>
                  <Text style={styles.acteurtext2}>Campan</Text>
                </View>
              </View>

              <View style={styles.gallerieacteur}>
                <Image
                  style={styles.acteur}
                  resizeMode="cover"
                  source={require("./ios/assets/img/Legitimus.jpg")}
                />
                <View style={styles.acteurs}>
                  <Text style={styles.acteurtext}>Pascal Légitimus</Text>
                  <Text style={styles.acteurtext2}>Légitimus</Text>
                </View>
              </View>
              <View style={styles.gallerieacteur}>
                <Image
                  style={styles.acteur}
                  resizeMode="cover"
                  source={require("./ios/assets/img/Bourdon.jpg")}
                />
                <View style={styles.acteurs}>
                  <Text style={styles.acteurtext}>Didier Bourdon</Text>
                  <Text style={styles.acteurtext2}>Bourdon</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.reaprod}>
            <View style={styles.bottom1}>
              <Text style={styles.rea}>Réalisateur </Text>
              <Text style={styles.nom}>Didier Bourdon </Text>
              <Text style={styles.nom}>Bernard Campan</Text>
            </View>
            <View style={styles.bottom2}>
              <Text style={styles.ecrivain}>Scénario </Text>
              <Text style={styles.nom}>Didier Bourdon et Bernard Campan</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  topband: {
    backgroundColor: "#393939",
    height: 50,
    paddingLeft: 10,
    justifyContent: "center"
  },

  // **********************First Section **********************
  firstsection: {
    flex: 1,
    marginTop: 20,
    height: 50,

    backgroundColor: "#212121"
  },
  movie: {
    padding: 10,
    backgroundColor: "#212121"
  },
  infos: {
    fontSize: 12,
    color: "lightgrey",
    marginTop: 15,
    marginRight: 15
  },
  title: {
    color: "white",
    fontSize: 25,
    marginTop: 8
  },
  categorie: {
    flex: 1,
    flexDirection: "row"
  },
  poster: {
    height: 140,
    width: 120,
    marginTop: 20
  },
  synopsis: {
    color: "#ffff",
    fontSize: 9,
    marginTop: 10
  },
  addbutton: {
    backgroundColor: "#e7b91e",
    borderRadius: 5,
    marginTop: 10,
    width: 220,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  addbuttontext: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 11
  },
  rating: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-around"
  },
  star: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginBottom: 5
  },
  meta: {
    backgroundColor: "#82c81e",
    width: 20,
    height: 20,
    color: "#ffff",
    fontWeight: "bold",
    marginBottom: 5
  },

  // **********************Second Section**********************
  secondsection: {
    marginTop: 13,
    padding: 10,
    backgroundColor: "#212121"
  },
  casting: {
    color: "white",
    fontSize: 17,
    marginTop: 25
  },

  acteurs: {
    width: 150,
    height: 50,
    backgroundColor: "#2b2b2b",
    padding: 8
  },
  acteur: {
    marginTop: 20,
    width: 150,
    height: 200
  },
  acteurtext: {
    color: "#ffff"
  },
  gallerieacteur: {
    marginRight: 10
  },
  acteurtext2: {
    color: "#ffff",
    fontSize: 9
  },
  allacteurs: {
    flexDirection: "row"
  },
  bottom1: {
    padding: 10
  },
  bottom2: {
    padding: 10
  },
  ecrivain: {
    color: "#ffff"
  },
  rea: {
    color: "#ffff"
  },
  nom: {
    fontSize: 10,
    color: "#ffff",
    marginTop: 5
  }
});

export default App;
