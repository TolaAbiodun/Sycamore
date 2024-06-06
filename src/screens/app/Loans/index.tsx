import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Container, GoBack } from '@/components';

const LoanFriendsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBack goBack title="Loan Friends" />
        <Text>Here is the Loan Friends Screen</Text>
      </Container>
    </SafeAreaView>
  );
};

export default LoanFriendsScreen;

const styles = StyleSheet.create({});
