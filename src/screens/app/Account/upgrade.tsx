import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Container, GoBack, Spacer } from '@/components';
import { WHITE } from '@/styles/colors';
import { FONT_FAMILY_DMSANS_REGULAR, FONT_SIZE_14 } from '@/styles/fonts';
import TierCard from './components/card';
import { accountLevels } from '@/utils/data';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackList } from '@/navigation/app-navigator';

type NavigatorProps = StackNavigationProp<AppStackList, 'TabNav'>;

type Props = {
  navigation: NavigatorProps;
};

const AccountUpgradeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <Container>
        <GoBack title="Account Levels" goBack />
        <Spacer height={10} />
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <Text style={styles.desc}>
            KYC regulation requires Sycamore to request certain details from you in order to
            increase your transaction limits. This is a requirement by .......
          </Text>
          <FlatList
            data={accountLevels}
            keyExtractor={(_, index) => index.toString()}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <TierCard
                type={item.type}
                icon={<Image source={item.icon} style={{ width: 25, height: 25 }} />}
                txnLimit={item.txnLimit}
                maxBal={item.dailyLimit}
                level={item.level}
                status={item.status}
              />
            )}
          />
          <Spacer height={40} />
          <Button
            variant="FILLED"
            onPress={() => {
              navigation.navigate('Transfers');
            }}
          >
            Upgrade to Tier 2
          </Button>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default AccountUpgradeScreen;

const styles = StyleSheet.create({
  desc: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    color: '#333',
    fontSize: FONT_SIZE_14,
  },
});
