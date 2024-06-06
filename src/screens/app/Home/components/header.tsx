import { Container, Spacer } from '@/components';
import ArrowFoward from '@/components/Icons/app/arrow-foward';
import Copy from '@/components/Icons/app/copy';
import Naira from '@/components/Icons/app/naira';
import Notification from '@/components/Icons/app/notification';
import { BLACK, GRAY_DARK, WHITE } from '@/styles/colors';
import {
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_FAMILY_TOMATO_BOLD,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_10,
  FONT_SIZE_14,
  FONT_SIZE_20,
} from '@/styles/fonts';
import { Text, StyleSheet, Animated, View, Image, ImageBackground } from 'react-native';

const Header_Max_Height = 100;
const Header_Min_Height = 100;

const DynamicHeader = ({ animHeaderValue }: any) => {
  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        {
          height: animateHeaderHeight,
        },
      ]}
    >
      <ImageBackground source={require('../../../../assets/images/backdrop.png')}>
        <Container>
          {/* Header View here */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.row}>
              <Image source={require('../../../../assets/images/user.png')} />
              <Text style={styles.txtReg}>Hello, User</Text>
            </View>
            {/* Notificatiion */}
            <Notification />
          </View>
          <Spacer height={15} />
        </Container>
        {/* <Text style={{ fontFamily: FONT_FAMILY_TOMATO_REGULAR }}>Here is the App</Text>
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
        /> */}
      </ImageBackground>
    </Animated.View>
  );
};

export default DynamicHeader;

const styles = StyleSheet.create({
  balCt: {
    padding: 15,
    marginTop: 15,
    backgroundColor: BLACK,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1F2C46',
  },
  bal: { color: WHITE, fontFamily: FONT_FAMILY_TOMATO_BOLD, fontSize: FONT_SIZE_20 },
  btn: {
    padding: 10,
    backgroundColor: '#1F2C46',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: GRAY_DARK,
    marginLeft: 104,
  },
  actionsCt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
  },

  header: {
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerV: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    left: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  txtReg: { color: WHITE, fontFamily: FONT_FAMILY_TOMATO_MEDIUM, fontSize: FONT_SIZE_14 },
});
