import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, GoBack, InputField, Spacer } from '@/components';
import { FlatList } from 'react-native-gesture-handler';
import { banks } from '@/utils/data';
import {
  FONT_FAMILY_DMSANS_MEDIUM,
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_16,
} from '@/styles/fonts';
import { BLACK, WHITE } from '@/styles/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackList } from '@/navigation/app-navigator';

type NavigatorProps = StackNavigationProp<AppStackList, 'TabNav'>;

type Props = {
  navigation: NavigatorProps;
};

const Bank = ({ imgUrl, name, onPress }: { imgUrl: string; name: string; onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.bnkCt} onPress={onPress}>
      <Image source={{ uri: imgUrl }} style={styles.img} />
      <Text style={styles.bnk}>{name}</Text>
    </TouchableOpacity>
  );
};

const BanksScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <Container>
        <GoBack title="Choose Bank" goBack />
        <Spacer height={10} />
        <Spacer height={10} />
        <InputField placeholder="Search Bank Name" value="" onChangeText={() => {}} />
        <Text style={styles.section}>Available Banks</Text>
        <Spacer height={10} />
        {/* Bank List */}
        <FlatList
          data={banks}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Bank imgUrl={item.logo} name={item.name} onPress={() => console.log(item.name)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10, paddingBottom: 400 }}
        />
      </Container>
    </SafeAreaView>
  );
};

export default BanksScreen;

const styles = StyleSheet.create({
  img: { width: 30, height: 30, borderRadius: 50 },
  bnk: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    color: BLACK,
    fontSize: FONT_SIZE_13,
  },
  bnkCt: { flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 15 },
  section: {
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    color: BLACK,
    fontSize: FONT_SIZE_14,
  },
  header: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_16,
    color: BLACK,
    textAlign: 'center',
  },
});
