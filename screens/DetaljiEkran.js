import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Boje from '../constants/Boje';

import { RADOVI } from '../data/test-podaci';

const DetaljiEkran = ({ route, navigation }) => {
  const idOsobe = Number(route.params.id);
  const rad = RADOVI.find((r) => r.id === idOsobe);
  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>ID Rada</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.id}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Ime osobe</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={{...stil.ime}}>{rad.student}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Naslov rada</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.naslov}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Vrsta:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.vrsta === 'D' ? 'Diplomski' : 'Završni'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  tablica: {
    width: '80%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,
    
  },
  ime:{
    fontFamily: "Corinthia",
    fontSize: 34
  },
  bold:{
    fontWeight: "bold",
  }
});

export default DetaljiEkran;
