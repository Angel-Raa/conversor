import { styled } from "styled-components/native";

export default function Index() {
  return (
    <Container>
        <Text>Home Screen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;


const Text = styled.Text`
font-size: 24px;
color: #333;
font-weight: bold;
margin: 16px 0;
`