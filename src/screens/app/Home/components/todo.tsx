import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ReactNode } from 'react';
import {
  FONT_FAMILY_DMSANS_BOLD,
  FONT_FAMILY_DMSANS_MEDIUM,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_FAMILY_TOMATO_REGULAR,
  FONT_SIZE_12,
  FONT_SIZE_13,
} from '@/styles/fonts';
import { BLACK, SYC_SECONDARY, SYC_SECONDARY_FAINT } from '@/styles/colors';
import { Spacer } from '@/components';
import { WINDOW_WIDTH } from '@/styles/mixins';

interface TodoProps {
  icon: ReactNode;
  progressIndicator?: ReactNode;
  title: string;
  description: string;
  actiontext: string;
  hasProgress?: boolean;
  onPress?: () => void;
}

const TodoList = ({
  icon,
  title,
  description,
  actiontext,
  hasProgress,
  progressIndicator,
  onPress,
}: TodoProps) => {
  return (
    <TouchableOpacity style={styles.ct} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.tp} />
      <View style={styles.row}>
        {icon}
        <View>
          {hasProgress ? (
            <View style={[styles.row, { padding: 0 }]}>
              <Text style={styles.title}>{title}</Text>
              {progressIndicator}
            </View>
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
          <Spacer height={5} />
          <Text style={styles.desc}>{description}</Text>
          <Spacer height={10} />
          <Text style={styles.actTxt}>{actiontext}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  ct: {
    borderRadius: 7,
    height: 115,
    width: WINDOW_WIDTH * 0.8,
    borderWidth: 1,
    borderColor: SYC_SECONDARY,
    backgroundColor: SYC_SECONDARY_FAINT,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  title: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_13,
    color: BLACK,
  },
  actTxt: {
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    fontSize: FONT_SIZE_12,
    color: '#FF7601',
  },
  desc: {
    fontFamily: FONT_FAMILY_TOMATO_REGULAR,
    fontSize: 12,
    color: '#333',
    width: 220,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  },
  tp: {
    backgroundColor: '#FF7601',
    width: 7,
    height: 'auto',
  },
});
