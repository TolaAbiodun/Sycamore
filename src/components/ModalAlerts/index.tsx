import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { BLACK, GRAY_DARK, SYC_RED, WHITE } from '@/styles/colors';
import {
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_FAMILY_TOMATO_BOLD,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_FAMILY_TOMATO_REGULAR,
  FONT_SIZE_14,
  FONT_SIZE_18,
} from '@/styles/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from '..';
import SvgClose from '../Icons/app/close';
import SvgCheck from '../Icons/app/check';
import Alert from '../Icons/app/alert';

interface AlertModalProps {
  title: string;
  message?: string;
  isVisible: boolean;
  type: string;
  action?: boolean;
  actionText?: string;
  dismissible: boolean;
  handleAction?: () => void;
  toggleModal?: () => void;
}

const AlertModal = ({
  title,
  type,
  message,
  isVisible,
  toggleModal,
  action,
  actionText,
  handleAction,
  dismissible,
}: AlertModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropColor="#d6d6d6"
      onBackButtonPress={toggleModal}
      onBackdropPress={toggleModal}
      animationInTiming={500}
      animationOutTiming={500}
      hideModalContentWhileAnimating
      backdropTransitionOutTiming={0} //Fixes Flicker on Android
    >
      <View style={styles.container}>
        {dismissible ? (
          <TouchableOpacity
            style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 10 }}
            onPress={toggleModal}
          >
            <SvgClose />
          </TouchableOpacity>
        ) : null}

        <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
          {/* Insert Check Mark icon */}
          {message && type === 'success' ? (
            <SvgCheck />
          ) : (
            // <Icon name="alert-circle-outline" size={80} color={SYC_RED} />
            <Alert fill="red" />
          )}
          <Text style={styles.title}>{title}</Text>
          {message ? <Text style={styles.message}>{message}</Text> : null}
          {action ? (
            <Button variant="FILLED" onPress={handleAction!}>
              {actionText}
            </Button>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_18,
    color: BLACK,
    textAlign: 'center',
  },
  message: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    fontSize: FONT_SIZE_14,
    color: '#333',
    textAlign: 'center',
  },
  container: {
    backgroundColor: WHITE,
    padding: 24,
    borderRadius: 14,
  },
});
