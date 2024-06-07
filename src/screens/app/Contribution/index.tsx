import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Container, GoBack } from '@/components';
import { BLACK } from '@/styles/colors';
import { FONT_FAMILY_DMSANS_MEDIUM } from '@/styles/fonts';

const ContributionScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBack goBack title="Contribution" />
        <Text style={{ color: BLACK, fontFamily: FONT_FAMILY_DMSANS_MEDIUM, textAlign: 'center' }}>
          Here is the Contribution Screen
        </Text>
      </Container>
    </SafeAreaView>
  );
};

export default ContributionScreen;

const styles = StyleSheet.create({});
