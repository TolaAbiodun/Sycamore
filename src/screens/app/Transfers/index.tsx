import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AlertModal from '@/components/ModalAlerts';
import { Container, GoBack, Spacer } from '@/components';
import { WHITE } from '@/styles/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackList } from '@/navigation/app-navigator';

type NavigatorProps = StackNavigationProp<AppStackList, 'TabNav'>;

type Props = {
  navigation: NavigatorProps;
};

const MoneyTransferScreen = ({ navigation }: Props) => {
  const [showModal, setShowModal] = useState(true);
  const handleToggleModal = () => {
    setShowModal(!showModal);
    //   navigation.navigate('DeptDetails', { groupId: groupId });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <Container>
        <GoBack title="Send Money" goBack />
        <Spacer height={10} />

        <AlertModal
          type="error"
          isVisible={showModal}
          title="Account Upgrade"
          message={`We noticed you have not fulfilled all your KYC requirements. Kindly tap the 'Upgrade Account' button below to complete the upgrade. \n\n For more information, please reach out to complaints@sycamore.ng or call 02017003497`}
          dismissible
          toggleModal={handleToggleModal}
          action
          handleAction={() => navigation.navigate('UpgradeAcct')}
          actionText="Upgrade Account"
        />
      </Container>
    </SafeAreaView>
  );
};

export default MoneyTransferScreen;

const styles = StyleSheet.create({});
