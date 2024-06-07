import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Container, GoBack } from '@/components';
import { BLACK } from '@/styles/colors';
import { FONT_FAMILY_DMSANS_MEDIUM } from '@/styles/fonts';

const PortfolioScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBack goBack title="Portfolio" />
        <Text style={{ color: BLACK, fontFamily: FONT_FAMILY_DMSANS_MEDIUM, textAlign: 'center' }}>
          Here is the Portfolio Screen
        </Text>
      </Container>
    </SafeAreaView>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({});
