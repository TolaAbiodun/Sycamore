/* eslint-disable react/react-in-jsx-scope */
import { SafeAreaView, Text } from 'react-native';
import { Button, Container, InputField, Spacer } from '@/components';
import CaretDown from '@/components/Icons/app/caret-down';
import { FONT_FAMILY_TOMATO_REGULAR } from '@/styles/fonts';
import { WHITE } from '@/styles/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: WHITE, flex: 1 }}>
      <Container>
        <Text style={{ fontFamily: FONT_FAMILY_TOMATO_REGULAR }}>Here is the App</Text>
        <Spacer height={20} />
        <Button onPress={() => {}} variant="FILLED">
          Proceed
        </Button>
        <Spacer height={20} />
        <InputField
          value=""
          label="Electricity Provider"
          labelSecondary={<Text>Choose Beneficiary</Text>}
          onChangeText={() => {}}
          placeholder="Ikeja Electric (IKEDC)"
          icon={<CaretDown />}
          iconPosition="right"
        />
        <InputField
          value=""
          onChangeText={() => {}}
          placeholder="Enter Meter number"
          label="Meter Number"
          icon={<CaretDown />}
          iconPosition="right"
        />
        <InputField
          value=""
          label="Choose Plan"
          onChangeText={() => {}}
          placeholder="Select a Plan"
          icon={<CaretDown />}
          iconPosition="right"
        />
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
