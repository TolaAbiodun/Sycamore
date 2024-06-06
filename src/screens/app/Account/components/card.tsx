import {
  BLACK,
  GRAY_DARK,
  GRAY_MEDIUM,
  SYC_GREEN,
  SYC_PRIMARY,
  SYC_PRIMARY_FAINT,
  WHITE,
} from '@/styles/colors';
import {
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_FAMILY_TOMATO_BOLD,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_10,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_15,
  FONT_SIZE_16,
} from '@/styles/fonts';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CardProps {
  type: string;
  txnLimit: string;
  maxBal: string;
  icon: ReactNode;
  level?: boolean;
  status?: string | null;
}

const TierCard = ({ type, txnLimit, maxBal, icon, level, status }: CardProps) => {
  return (
    <View style={[styles.ct, { backgroundColor: level ? SYC_PRIMARY_FAINT : WHITE }]}>
      <View
        style={[
          styles.row,
          {
            backgroundColor: level ? SYC_PRIMARY : WHITE,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            justifyContent: 'space-between',
          },
        ]}
      >
        <View style={styles.row}>
          {icon}
          <Text style={[styles.type, { color: level ? WHITE : BLACK }]}>{type}</Text>
        </View>
        <Text style={styles.status}>{status}</Text>
      </View>
      <View style={{ gap: 10, paddingHorizontal: 10, paddingVertical: 10 }}>
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <Text style={styles.desc}>Single Transaction Limit</Text>
          <Text style={[styles.val, { color: level ? BLACK : SYC_GREEN }]}>{txnLimit}</Text>
        </View>
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <Text style={styles.desc}>Daily Transaction Limit</Text>
          <Text style={[styles.val, { color: level ? BLACK : SYC_GREEN }]}>{maxBal}</Text>
        </View>
      </View>
    </View>
  );
};

export default TierCard;

const styles = StyleSheet.create({
  ct: {
    backgroundColor: WHITE,
    // padding: 15,
    marginVertical: 15,
    borderRadius: 10,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desc: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    fontSize: FONT_SIZE_14,
    color: GRAY_DARK,
  },
  val: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_14,
    color: SYC_GREEN,
  },
  type: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_16,
    color: BLACK,
  },
  status: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    fontSize: FONT_SIZE_12,
    color: GRAY_MEDIUM,
  },
});
