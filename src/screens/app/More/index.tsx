import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Container, GoBack } from '@/components';
import { BLACK } from '@/styles/colors';
import { FONT_FAMILY_DMSANS_MEDIUM } from '@/styles/fonts';

const MoreScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBack goBack title="More" />
        <Text style={{ color: BLACK, fontFamily: FONT_FAMILY_DMSANS_MEDIUM, textAlign: 'center' }}>
          Here is the Options Screen
        </Text>
      </Container>
    </SafeAreaView>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({});
