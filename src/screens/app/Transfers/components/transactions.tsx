import ChevronFoward from '@/components/Icons/app/chevron-foward';
import { BLACK, GRAY_DARK, GRAY_MEDIUM, WHITE } from '@/styles/colors';
import {
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_11,
  FONT_SIZE_12,
  FONT_SIZE_14,
} from '@/styles/fonts';
import { ReactNode } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Transaction = ({
  icon,
  title,
  value,
  onPress,
  createdAt,
}: {
  icon: ImageSourcePropType;
  title: string;
  value: string;
  createdAt: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.ct} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.row}>
        <Image source={icon} style={styles.img} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>
            {`You sent ₦${value}`} . {createdAt}
          </Text>
        </View>
      </View>
      <ChevronFoward />
    </TouchableOpacity>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  ct: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_14,
    color: BLACK,
    paddingBottom: 2,
  },
  desc: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    fontSize: FONT_SIZE_11,
    color: GRAY_MEDIUM,
  },
  img: {
    borderRadius: 50,
    width: 30,
    height: 30,
  },
});
