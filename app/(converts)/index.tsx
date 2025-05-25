import { router } from "expo-router";
import { styled } from "styled-components/native";

export default function Index() {
  return (
    <Container>
      <Icon source={{ uri: "https://i.ibb.co/2TnT6L8/conversor.png" }} />
      <Text>Conversor</Text>
      <SubTitle>(cm ) a (m)</SubTitle>
      <StartBtn onPress={() => router.push('/converts')}>
        <BtnText>Iniciar</BtnText>
      </StartBtn>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f7e7ce;
`;

const Text = styled.Text`
  font-size: 45px;
  color: #614e3e;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubTitle = styled.Text`
  font-size: 40px;
  color: #614e3e;
  margin-bottom: 40px;
  font-weight: bold;
`;

const StartBtn = styled.TouchableOpacity`
  background-color: #decf93;
  padding: 15px 30px;
  border-radius: 8px;
`;
const BtnText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #614e3e;
`;
const Icon = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 25px;
`;
