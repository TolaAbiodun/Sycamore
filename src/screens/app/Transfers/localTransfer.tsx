import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, InputField, Spacer } from '@/components';
import CustomInputSelector from '../Bills/components/selector';
import CaretDown from '@/components/Icons/app/caret-down';
import { FONT_FAMILY_TOMATO_MEDIUM, FONT_SIZE_16 } from '@/styles/fonts';
import { BLACK, WHITE } from '@/styles/colors';

const LocalTransfer = () => {
  const [bankAcct, setBankAcct] = useState('');
  return (
    <View>
      <Text style={styles.header}>Transfer To Bank Account</Text>
      <Spacer height={20} />
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
        onPress={() => {}}
      />
      <Spacer height={30} />
      <Button variant="FILLED" onPress={() => {}}>
        Proceed
      </Button>
    </View>
  );
};

export default LocalTransfer;

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
});
