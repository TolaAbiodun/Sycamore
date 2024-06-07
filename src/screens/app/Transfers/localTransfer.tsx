import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
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
import { banks, transactions } from '@/utils/data';
import TransferQuota from './components/quota';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

type NavigatorProps = StackNavigationProp<AppStackList, 'TabNav'>;

type Props = {
  navigation: NavigatorProps;
};

const Bank = ({ imgUrl, name, onPress }: { imgUrl: string; name: string; onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.bnkCt} onPress={onPress}>
      <Image source={{ uri: imgUrl }} style={styles.img} />
      <Text style={styles.bnk}>{name}</Text>
    </TouchableOpacity>
  );
};

const LocalTransferScreen = ({ navigation }: Props) => {
  const [bankAcct, setBankAcct] = useState('');
  const sheetRef = useRef<BottomSheet>(null);

  const expandAction = useCallback(() => {
    sheetRef.current?.snapToIndex(0);
  }, [sheetRef]);

  const snapPoints = useMemo(() => ['85%', '95%'], []);

  const renderBackDrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    []
  );
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
            onPress={expandAction}
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
        <BottomSheet
          backdropComponent={renderBackDrop}
          ref={sheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose
          keyboardBehavior="extend"
          backgroundStyle={{ backgroundColor: WHITE }}
        >
          <Container>
            <Spacer height={10} />
            <Text style={styles.header}>Choose Bank</Text>
            <Spacer height={10} />
            <InputField placeholder="Search Bank Name" value="" onChangeText={() => {}} />
            <Text style={styles.section}>Available Banks</Text>
            <Spacer height={10} />
            {/* Bank List */}
            <FlatList
              data={banks}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <Bank imgUrl={item.logo} name={item.name} onPress={() => console.log(item.name)} />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingBottom: 400 }}
            />
          </Container>
        </BottomSheet>
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
