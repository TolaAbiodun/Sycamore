import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Container, GoBack } from '@/components';
import { BLACK } from '@/styles/colors';
import { FONT_FAMILY_DMSANS_MEDIUM } from '@/styles/fonts';

const LoanFriendsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBack goBack title="Loan Friends" />
        <Text style={{ color: BLACK, fontFamily: FONT_FAMILY_DMSANS_MEDIUM, textAlign: 'center' }}>
          Here is the Loan Friends Screen
        </Text>
      </Container>
    </SafeAreaView>
  );
};

export default LoanFriendsScreen;

const styles = StyleSheet.create({});
