import { Button, Container, GoBack, InputField, Spacer } from '@/components';
import ArrowUpRight from '@/components/Icons/app/arrow-up-right';
import CaretDown from '@/components/Icons/app/caret-down';
import { AppStackList } from '@/navigation/app-navigator';
import { BLACK, GRAY_DARK, SYC_GREEN, WHITE } from '@/styles/colors';
import {
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_FAMILY_TOMATO_REGULAR,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
} from '@/styles/fonts';
import { billTypes } from '@/utils/data';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BillType from './components/menu';
import CustomInputSelector from './components/selector';

type NavigatorProps = StackNavigationProp<AppStackList, 'TabNav'>;

type Props = {
  navigation: NavigatorProps;
};

const BillPaymentScreen = ({ navigation }: Props) => {
  const fields = {
    provider: '',
    meterNumber: '',
    plan: '',
    beneficiary: '',
  };
  const [input, setInput] = useState(fields);
  const [isBeneficiaryChecked, setIsBeneficiaryChecked] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(2);

  const handleInputChange = (name: string, value: string) => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <Container>
        <GoBack title="Pay Bills" goBack />
        <Spacer height={10} />
      </Container>
      <ScrollView>
        <View style={styles.divider} />
        {/* Bill type menu */}
        <View style={styles.pd}>
          <Text style={styles.hTxt}>Select a Bill Type</Text>
          <FlatList
            data={billTypes}
            renderItem={({ item, index }) => (
              <BillType
                icon={item.icon}
                title={item.title}
                bgColor={item.bgColor}
                bdColor={item.bdColor}
                isActive={index === selectedIndex}
                onPress={() => {
                  setSelectedIndex(index);
                }}
              />
            )}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}
          />
        </View>
        <Spacer height={20} />
        <View style={styles.divider} />
        {/* Inputs */}
        <Container>
          <Spacer height={20} />
          <CustomInputSelector
            label="Electricity Provider"
            labelSecondary={
              <Text>
                Choose Beneficiary <ArrowUpRight />
              </Text>
            }
            value="Ikeja Electric (IKEDC)"
            icon={<CaretDown />}
            iconPosition="right"
            onPress={() => {}}
          />
          {/* Meter Number */}
          <InputField
            value={input.meterNumber}
            onChangeText={(val) => {
              handleInputChange('meterNumber', val);
            }}
            placeholder="Enter Meter number"
            label="Meter Number"
          />
          <CustomInputSelector
            label="Choose Plan"
            labelSecondary={<Text>Balance: ****</Text>}
            icon={<CaretDown />}
            iconPosition="right"
            value="Select a plan"
            onPress={() => {}}
          />
          <Text style={styles.footer}>Limit Per Transaction: ₦200,000</Text>
          {/* Checkbox */}
          <BouncyCheckbox
            size={24}
            fillColor={SYC_GREEN}
            text="Save as beneficiary"
            textStyle={styles.chkBox}
            iconStyle={{
              borderColor: SYC_GREEN,
              borderRadius: 2,
              width: 18,
              height: 18,
            }}
            isChecked={isBeneficiaryChecked}
            innerIconStyle={{ borderWidth: 2, borderRadius: 2, width: 18, height: 18 }}
            onPress={(isChecked) => {
              setIsBeneficiaryChecked(isChecked);
            }}
          />
          <Spacer height={15} />
          {/* Beneficiary */}
          {isBeneficiaryChecked ? (
            <InputField
              value=""
              label="Customize Beneficiary Name (optional)"
              onChangeText={() => {}}
              placeholder="Enter Name"
            />
          ) : null}
          <Spacer height={10} />
          <Button onPress={() => {}} variant="FILLED">
            Proceed to Pay Bill
          </Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BillPaymentScreen;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#d6d6d6',
  },
  hTxt: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_16,
    paddingVertical: 10,
  },
  pd: {
    paddingHorizontal: 15,
  },
  footer: {
    fontFamily: FONT_FAMILY_TOMATO_REGULAR,
    color: GRAY_DARK,
    fontSize: FONT_SIZE_12,
    marginBottom: 20,
  },
  chkBox: {
    fontWeight: '600',
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    marginLeft: -10,
    textDecorationLine: 'none',
    color: BLACK,
  },
});
