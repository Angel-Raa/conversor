import { router } from "expo-router";
import { styled } from "styled-components/native";
import React, { useState } from "react";

export default function Converts() {
  const [cm, setCm] = useState("");
  const [resultado, setResultado] = useState("");

  function convertirCmAMetros(valor: string) {
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      setResultado((numero / 100).toString() + " m");
    } else {
      setResultado("");
    }
  }

  return (
    <Container>
      <Input
        placeholder="Centimetros (cm)"
        keyboardType={"numeric"}
        onChangeText={setCm}
        
      />
      <Button onPress={() => convertirCmAMetros(cm)}>
        <ButtonText>Calcular</ButtonText>
      </Button>
      <Label>Resultado: {resultado}</Label>
      <BackBtn onPress={() => router.back()}>
        <BackButtonText>Volver atras</BackButtonText>
      </BackBtn>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f7e7ce;
`;

const Input = styled.TextInput`
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 25px;
`;
const Button = styled.TouchableOpacity`
  background-color: #fff;
  padding: 15px 30px;
  border-radius: 8px;
  margin-bottom: 20px;
`;
const Label = styled.Text`
  font-size: 25px;
  color: #614e3e;
  font-weight: bold;
  margin-bottom: 8px;
`;
const BackBtn = styled.Text`
  background-color: #decf93;
  padding: 15px 30px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #614e3e;
  font-weight: bold;
`;
const BackButtonText = styled.Text``;
