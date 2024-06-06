import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Container, GoBack } from '@/components';

const ContributionScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBack goBack title="Contribution" />
        <Text>Here is the Contribution Screen</Text>
      </Container>
    </SafeAreaView>
  );
};

export default ContributionScreen;

const styles = StyleSheet.create({});
