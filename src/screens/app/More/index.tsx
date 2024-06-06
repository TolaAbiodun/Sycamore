import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Container, GoBack } from '@/components';

const MoreScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBack goBack title="More" />
        <Text>Here is the Options Screen</Text>
      </Container>
    </SafeAreaView>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({});
