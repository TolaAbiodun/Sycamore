/* eslint-disable react/react-in-jsx-scope */
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_FAMILY_TOMATO_BOLD,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_10,
  FONT_SIZE_14,
  FONT_SIZE_15,
  FONT_SIZE_20,
} from '@/styles/fonts';
import { BLACK, GRAY_DARK, WHITE } from '@/styles/colors';
import Copy from '@/components/Icons/app/copy';
import Naira from '@/components/Icons/app/naira';
import ArrowFoward from '@/components/Icons/app/arrow-foward';
import MenuAction from './components/actions';
import PlusCircle from '@/components/Icons/app/plus-circle';
import PlaneTilt from '@/components/Icons/app/planetilt';
import Reciept from '@/components/Icons/app/receipt';
import { WINDOW_WIDTH } from '@/styles/mixins';
import QuickActionMenu from './components/quickActions';
import { Todos, actionsData } from '@/utils/data';
import TodoList from './components/todo';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useRef, useState } from 'react';
import DynamicHeader from './components/header';
import Master from '@/components/Icons/app/master';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackList } from '@/navigation/app-navigator';
import { Container, Spacer } from '@/components';
import EyeVisible from '@/components/Icons/app/eye-visible';
import EyeCross from '@/components/Icons/app/eye-cross';

type NavigatorProps = StackNavigationProp<AppStackList, 'TabNav'>;

type Props = {
  navigation: NavigatorProps;
};

const HomeScreen = ({ navigation }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [isBalanceVisibile, setIsBalanceVisible] = useState(true);

  const onViewRef = useRef((viewableItems: any) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  // Handlers
  const toggleBalance = () => {
    setIsBalanceVisible(!isBalanceVisibile);
  };

  return (
    <>
      <DynamicHeader />
      <ScrollView
        contentContainerStyle={{ backgroundColor: WHITE, paddingBottom: 50 }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
          useNativeDriver: false,
        })}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1000}
        bounces={false}
      >
        <View style={{ backgroundColor: WHITE, flex: 1 }}>
          <ImageBackground source={require('../../../assets/images/backdrop.png')}>
            <Container>
              {/* Wallet Balances */}
              <View style={styles.balCt}>
                <Text style={[styles.txtReg, { fontFamily: FONT_FAMILY_DMSANS_REGULAR }]}>
                  Wallet Balance
                </Text>
                <Spacer height={10} />
                <View style={styles.header}>
                  <View style={[styles.row, { justifyContent: 'space-between', width: '100%' }]}>
                    <View style={[styles.row, { gap: 2 }]}>
                      <Naira />
                      <Text style={styles.bal}>
                        {isBalanceVisibile ? '53,754.00' : '* * * * * * * '}
                      </Text>
                      <View style={{ marginRight: 5 }} />
                      <TouchableOpacity hitSlop={10} activeOpacity={0.7} onPress={toggleBalance}>
                        {isBalanceVisibile ? <EyeCross /> : <EyeVisible />}
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.row, styles.btn]} activeOpacity={0.7}>
                      <Text style={[styles.txtReg, { fontSize: FONT_SIZE_10 }]}>View History</Text>
                      <ArrowFoward />
                    </TouchableOpacity>
                  </View>
                </View>
                <Spacer height={15} />
                <View style={styles.row}>
                  <Text style={styles.txtReg}>
                    <Text style={[styles.txtReg, { fontFamily: FONT_FAMILY_DMSANS_REGULAR }]}>
                      Wema Bank:{' '}
                    </Text>
                    61247902547
                  </Text>
                  <Copy />
                </View>
              </View>
              {/* Call to Actions */}
              <View style={styles.actionsCt}>
                <MenuAction title="Fund Wallet" onPress={() => {}} icon={<PlusCircle />} />
                <MenuAction
                  title="Send Money"
                  onPress={() => {
                    navigation.navigate('Transfers');
                  }}
                  icon={<PlaneTilt />}
                />
                <MenuAction
                  title="Pay Bills"
                  onPress={() => {
                    navigation.navigate('BillPayment');
                  }}
                  icon={<Reciept />}
                />
              </View>
            </Container>
            <Spacer height={10} />
          </ImageBackground>
          <Spacer height={10} />
          <Container>
            {/* To do List  */}
            <View style={[styles.row, { justifyContent: 'space-between' }]}>
              <Text style={styles.headings}>To-Do List</Text>
              <View style={styles.paginationContainer}>
                {Todos.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      { backgroundColor: activeIndex === index ? GRAY_DARK : '#C4C4C4' },
                      { width: activeIndex === index ? 18 : 5 },
                    ]}
                  />
                ))}
              </View>
            </View>
            <Spacer height={5} />
            <FlatList
              ref={flatListRef}
              data={Todos}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={WINDOW_WIDTH * 0.8 + 10} // Adjust for item width and gap
              decelerationRate="fast"
              pagingEnabled
              onViewableItemsChanged={onViewRef.current}
              viewabilityConfig={viewConfigRef.current}
              contentContainerStyle={{ gap: 10 }}
              renderItem={({ item, index }) => (
                <View style={{ overflow: 'hidden', marginBottom: 20, width: WINDOW_WIDTH * 0.8 }}>
                  <TodoList
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                    onPress={() => {}}
                    actiontext={item.actionText}
                    hasProgress={index === 0}
                    progressIndicator={
                      <CircularProgress
                        radius={18}
                        value={25}
                        duration={500}
                        inActiveStrokeColor={GRAY_DARK}
                        inActiveStrokeOpacity={0.2}
                        activeStrokeWidth={5}
                        inActiveStrokeWidth={5}
                        activeStrokeColor="#FF7601"
                        progressValueColor={'#333'}
                        valueSuffix={'%'}
                      />
                    }
                  />
                </View>
              )}
            />
            {/* list carousel */}
            {/* News and Offers */}
            <Text style={styles.headings}>News & Offers</Text>
            <Image source={require('../../../assets/images/advert.png')} style={styles.adImg} />
            <Spacer height={15} />
            {/* Quick Actions */}
            <Text style={styles.headings}>Quick Actions</Text>
            <Spacer height={5} />
            <FlatList
              numColumns={2}
              columnWrapperStyle={styles.menuR}
              contentContainerStyle={{ flex: 1 }}
              keyExtractor={(_, index) => index.toString()}
              data={actionsData}
              scrollEnabled={false}
              renderItem={({ item, index }) => (
                <View style={{ overflow: 'hidden', marginBottom: 20 }}>
                  <QuickActionMenu
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                    onPress={() => {}}
                    backdrop={item.backdrop}
                    isExclusive={index === 3}
                    badge={<Master />}
                  />
                </View>
              )}
            />
          </Container>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  img: {
    // height: 300,
  },
  row: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtReg: { color: WHITE, fontFamily: FONT_FAMILY_TOMATO_MEDIUM, fontSize: FONT_SIZE_14 },
  balCt: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    backgroundColor: BLACK,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1F2C46',
  },
  bal: { color: WHITE, fontFamily: FONT_FAMILY_TOMATO_BOLD, fontSize: FONT_SIZE_20 },
  btn: {
    padding: 10,
    backgroundColor: '#1F2C46',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: GRAY_DARK,
  },
  actionsCt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
  },
  headings: {
    color: BLACK,
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_15,
    marginBottom: 5,
  },
  adImg: {
    height: 100,
    width: WINDOW_WIDTH - 30,
    borderRadius: 15,
  },
  menuR: {
    flex: 1,
    alignItems: 'center',
    gap: 15,
  },

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});
