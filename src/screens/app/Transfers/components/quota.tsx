import { StyleSheet, Text, View } from 'react-native';
import { SYC_GREEN } from '@/styles/colors';
import PlaneTilt2 from '@/components/Icons/app/planetilt2';
import {
  FONT_FAMILY_DMSANS_BOLD,
  FONT_FAMILY_DMSANS_MEDIUM,
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_SIZE_12,
  FONT_SIZE_13,
  FONT_SIZE_14,
} from '@/styles/fonts';

const TransferQuota = ({ quota }: { quota: number }) => {
  return (
    <View style={styles.ct}>
      <PlaneTilt2 />
      <Text style={styles.txt}>
        You have <Text style={{ fontFamily: FONT_FAMILY_DMSANS_BOLD }}>{quota} free transfers</Text>{' '}
        left this month
      </Text>
    </View>
  );
};

export default TransferQuota;

const styles = StyleSheet.create({
  ct: {
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: SYC_GREEN,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  txt: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    fontSize: FONT_SIZE_13,
  },
});
