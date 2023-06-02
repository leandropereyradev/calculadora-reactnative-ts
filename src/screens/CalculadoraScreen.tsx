/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => setNumero('0');

  const armarNumero = (numeroTexto: string) => {
    setNumero(numero + numeroTexto);
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" action={limpiar} />
        <BotonCalc text="+/-" color="#9B9B9B" action={limpiar} />
        <BotonCalc text="del" color="#9B9B9B" action={limpiar} />
        <BotonCalc text="/" color="#FF9427" action={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="7" action={armarNumero} />
        <BotonCalc text="8" action={armarNumero} />
        <BotonCalc text="9" action={armarNumero} />
        <BotonCalc text="x" color="#FF9427" action={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="4" action={armarNumero} />
        <BotonCalc text="5" action={armarNumero} />
        <BotonCalc text="6" action={armarNumero} />
        <BotonCalc text="-" color="#FF9427" action={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="1" action={armarNumero} />
        <BotonCalc text="2" action={armarNumero} />
        <BotonCalc text="3" action={armarNumero} />
        <BotonCalc text="+" color="#FF9427" action={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="0" action={armarNumero} ancho />
        <BotonCalc text="." action={armarNumero} />
        <BotonCalc text="=" color="#FF9427" action={limpiar} />
      </View>
    </View>
  );
};
