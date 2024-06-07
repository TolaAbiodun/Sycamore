import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';
import { Button, Container, GoBack, InputField, Spacer } from '@/components';
import CustomInputSelector from '../Bills/components/selector';
import CaretDown from '@/components/Icons/app/caret-down';
import {
  FONT_FAMILY_DMSANS_MEDIUM,
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_12,
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_16,
} from '@/styles/fonts';
import { BLACK, SYC_GREEN, WHITE } from '@/styles/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackList } from '@/navigation/app-navigator';
import Transaction from './components/transactions';
import moment from 'moment';
import { transactions } from '@/utils/data';
import TransferQuota from './components/quota';

type NavigatorProps = StackNavigationProp<AppStackList, 'TabNav'>;

type Props = {
  navigation: NavigatorProps;
};

const LocalTransferScreen = ({ navigation }: Props) => {
  const [bankAcct, setBankAcct] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <Container>
        <GoBack title="Transfer to Bank Account" goBack />
        <Spacer height={10} />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
        >
          <TransferQuota quota={5} />
          <Spacer height={10} />
          <InputField
            value={bankAcct}
            label="Recipient Account"
            onChangeText={(val) => {
              setBankAcct(val);
            }}
            placeholder="Enter 10 digits Account Number"
          />
          <CustomInputSelector
            icon={<CaretDown />}
            label="Bank"
            iconPosition="right"
            value="Select Bank"
            onPress={() => {
              navigation.navigate('Banks');
            }}
          />
          <Spacer height={30} />
          <Button variant="FILLED" onPress={() => {}}>
            Proceed
          </Button>

          {/* SHow Recent transactions */}
          <Spacer height={30} />
          <View style={styles.row}>
            <Text style={styles.section}>Recents</Text>
            <Pressable>
              <Text style={styles.act}>View All</Text>
            </Pressable>
          </View>
          {/* Transaction List */}
          <FlatList
            data={transactions}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Transaction
                icon={item.icon}
                title={item.title}
                value={item.value}
                onPress={() => {}}
                createdAt={moment(item.createdAt).fromNow()}
              />
            )}
            contentContainerStyle={{ gap: 10 }}
          />
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default LocalTransferScreen;

const styles = StyleSheet.create({
  header: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_16,
    color: BLACK,
    textAlign: 'center',
  },
  innerCt: {
    padding: 5,
    backgroundColor: WHITE,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bnkCt: { flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 15 },
  act: {
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    color: SYC_GREEN,
    fontSize: FONT_SIZE_12,
  },
  section: {
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    color: BLACK,
    fontSize: FONT_SIZE_14,
  },
  contentContainer: {
    backgroundColor: WHITE,
    flex: 1,
    paddingHorizontal: 15,
  },
  img: { width: 30, height: 30, borderRadius: 50 },
  bnk: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    color: BLACK,
    fontSize: FONT_SIZE_13,
  },
});
