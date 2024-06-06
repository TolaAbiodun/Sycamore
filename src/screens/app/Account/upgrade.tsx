import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Container, GoBack, Spacer } from '@/components';
import { WHITE } from '@/styles/colors';

const AccountUpgradeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <Container>
        <GoBack title="Account Levels" goBack />
        <Spacer height={10} />
      </Container>
    </SafeAreaView>
  );
};

export default AccountUpgradeScreen;

const styles = StyleSheet.create({});
