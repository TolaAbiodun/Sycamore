import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';
import AlertModal from '@/components/ModalAlerts';
import { Container, GoBack, Spacer } from '@/components';
import { BLACK, SYC_GREEN, SYC_PRIMARY_FAINT, WHITE } from '@/styles/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackList } from '@/navigation/app-navigator';
import TransferQuota from './components/quota';
import Beneficiary from './components/beneficiary';
import { beneficiaries, transactions } from '@/utils/data';
import { createInitials } from '@/utils/helpers';
import Actions from './components/actions';
import PlaneTilt2 from '@/components/Icons/app/planetilt2';
import { FONT_FAMILY_DMSANS_MEDIUM, FONT_SIZE_12, FONT_SIZE_14 } from '@/styles/fonts';
import Transaction from './components/transactions';
import moment from 'moment';

type NavigatorProps = StackNavigationProp<AppStackList, 'TabNav'>;

type Props = {
  navigation: NavigatorProps;
};

const MoneyTransferScreen = ({ navigation }: Props) => {
  const [showModal, setShowModal] = useState(true);
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <Container>
        <GoBack title="Send Money" goBack />
        <Spacer height={10} />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Modal Alert for KYC */}
          <AlertModal
            type="error"
            isVisible={showModal}
            title="Account Upgrade"
            message={`We noticed you have not fulfilled all your KYC requirements. Kindly tap the 'Upgrade Account' button below to complete the upgrade. \n\n For more information, please reach out to complaints@sycamore.ng or call 02017003497`}
            dismissible
            toggleModal={handleToggleModal}
            action
            handleAction={() => {
              navigation.navigate('UpgradeAcct');
              handleToggleModal();
            }}
            actionText="Upgrade Account"
          />
          {/* <View style={styles.divider} /> */}
          {/* Transfer Quota */}
          <TransferQuota quota={25} />
          <Spacer height={20} />
          {/* Beneficiaries */}
          <View style={styles.row}>
            <Text style={styles.section}>Beneficiaries</Text>
            <Pressable>
              <Text style={styles.act}>View All</Text>
            </Pressable>
          </View>
          <Spacer height={10} />
          <FlatList
            data={beneficiaries}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Beneficiary initials={createInitials(item.name)} name={item.name} />
            )}
            contentContainerStyle={{ gap: 10 }}
          />
          <Spacer height={20} />
          {/* Call to Actions */}
          <Actions
            icon={<Image source={require('../../../assets/images/tag.jpeg')} style={styles.img} />}
            title="Send to a Tag"
            desc="Transfer to a user using #tag"
            onPress={() => {}}
          />
          <Actions
            icon={
              <Image
                source={require('../../../assets/images/logo.png')}
                style={{ width: 20, height: 20 }}
              />
            }
            title="Send to Sycamore"
            desc="Transfer to any Sycamore account for free"
            onPress={() => {}}
          />
          <Actions
            icon={<PlaneTilt2 />}
            title="Send to Bank Account"
            desc="Transfer to a local bank account"
            onPress={() => navigation.navigate('LocalTransfers')}
          />
          {/* Recent Transfers */}
          <View style={styles.row}>
            <Text style={styles.section}>Recents</Text>
            <Pressable>
              <Text style={styles.act}>View All</Text>
            </Pressable>
          </View>
          {/* Transaction List */}
          <FlatList
            data={transactions}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Transaction
                icon={item.icon}
                title={item.title}
                value={item.value}
                onPress={() => {}}
                createdAt={moment(item.createdAt).fromNow()}
              />
            )}
            contentContainerStyle={{ gap: 10 }}
          />
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default MoneyTransferScreen;

const styles = StyleSheet.create({
  divider: {
    height: 1.5,
    backgroundColor: '#f5f5f5',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  act: {
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    color: SYC_GREEN,
    fontSize: FONT_SIZE_12,
  },
  section: {
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    color: BLACK,
    fontSize: FONT_SIZE_14,
  },
  contentContainer: {
    backgroundColor: SYC_PRIMARY_FAINT,
    flex: 1,
    paddingBottom: 100,
    paddingHorizontal: 15,
  },
  img: { width: 30, height: 30, marginLeft: -10 },
});
