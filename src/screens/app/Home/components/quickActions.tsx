import { ColorValue, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { Spacer } from '@/components';
import { FONT_FAMILY_TOMATO_MEDIUM, FONT_FAMILY_TOMATO_REGULAR } from '@/styles/fonts';
import { BLACK } from '@/styles/colors';
import { WINDOW_WIDTH } from '@/styles/mixins';

interface ActionProps {
  backdrop: ColorValue;
  onPress?: () => void;
  icon: ReactNode;
  badge?: ReactNode;
  title: string;
  description: string;
  isExclusive?: boolean;
}

const QuickActionMenu = ({
  backdrop,
  onPress,
  icon,
  title,
  description,
  isExclusive,
  badge,
}: ActionProps) => {
  return (
    <TouchableOpacity
      style={[styles.ct, { backgroundColor: backdrop }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View>
        <Spacer height={10} />
        {isExclusive ? (
          <View style={[styles.row, { padding: 0 }]}>
            {icon}
            {badge}
          </View>
        ) : (
          icon
        )}
        <Spacer height={15} />
        <Text style={styles.title}>{title}</Text>
        <Spacer height={5} />
        <Text style={styles.desc}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuickActionMenu;

const styles = StyleSheet.create({
  ct: {
    padding: 10,
    borderRadius: 15,
    width: WINDOW_WIDTH * 0.44,
    height: 155,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: 15,
    color: BLACK,
  },
  desc: {
    fontFamily: FONT_FAMILY_TOMATO_REGULAR,
    fontSize: 10,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
