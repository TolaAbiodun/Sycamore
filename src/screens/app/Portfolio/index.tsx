import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Container, GoBack } from '@/components';

const PortfolioScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBack goBack title="Portfolio" />
        <Text>Here is the Portfolio Screen</Text>
      </Container>
    </SafeAreaView>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({});
