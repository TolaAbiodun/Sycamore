import { Container, Spacer } from '@/components';
import Notification from '@/components/Icons/app/notification';
import { BLACK, GRAY_DARK, WHITE } from '@/styles/colors';
import {
  FONT_FAMILY_TOMATO_BOLD,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_14,
  FONT_SIZE_20,
} from '@/styles/fonts';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';

const DynamicHeader = () => {
  return (
    <ImageBackground
      source={require('../../../../assets/images/backdrop.png')}
      style={{ paddingTop: 15 }}
    >
      <Container>
        {/* Header View here */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.row}>
            <Image source={require('../../../../assets/images/user.png')} />
            <Text style={styles.txtReg}>Hello, Adetola</Text>
          </View>
          {/* Notificatiion */}
          <Notification />
        </View>
        <Spacer height={15} />
      </Container>
    </ImageBackground>
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
