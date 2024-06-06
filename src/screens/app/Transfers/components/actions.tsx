import ChevronFoward from '@/components/Icons/app/chevron-foward';
import { BLACK, GRAY_DARK, GRAY_MEDIUM, WHITE } from '@/styles/colors';
import {
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_12,
  FONT_SIZE_14,
} from '@/styles/fonts';
import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Actions = ({
  icon,
  title,
  desc,
  onPress,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.ct} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.row}>
        {icon}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
      <ChevronFoward />
    </TouchableOpacity>
  );
};

export default Actions;

const styles = StyleSheet.create({
  ct: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
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
    fontSize: FONT_SIZE_12,
    color: GRAY_DARK,
  },
});
