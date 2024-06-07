import Cable from '@/components/Icons/app/cable';
import Data from '@/components/Icons/app/data';
import Investment from '@/components/Icons/app/investment';
import Loan from '@/components/Icons/app/loan';
import Misc1 from '@/components/Icons/app/misc_1';
import Misc2 from '@/components/Icons/app/misc_2';
import Money from '@/components/Icons/app/money';
import Money2 from '@/components/Icons/app/money2';
import Power from '@/components/Icons/app/power';
import Savings from '@/components/Icons/app/savings';
import Sim from '@/components/Icons/app/sim';
import Upgrade from '@/components/Icons/app/upgrade';

export const actionsData = [
  {
    id: 0,
    title: 'Loans',
    description: 'Apply for one of our low-interest loans to cater for your financial needs.',
    backdrop: '#DEF6E8',
    icon: <Money2 />,
  },
  {
    id: 1,
    title: 'Investments',
    description: 'Earn while you sleep. Enjoy up to 16.5% returns per annum on your investments.',
    backdrop: '#E0DEF6',
    icon: <Investment />,
  },
  {
    id: 2,
    title: 'Loan Friends',
    description:
      'Lend and borrow money from family and friends within and outside Sycamore with ease.  ',
    backdrop: '#F9F1DC',
    icon: <Loan />,
  },
  {
    id: 3,
    title: 'Target Contribution',
    description:
      'Contribute towards hitting your financial goal and earn up to 20% interest per annum while at it.',
    backdrop: '#FFE4CC',
    icon: <Savings />,
  },
];

export const Todos = [
  {
    id: 0,
    title: 'Complete Account Upgrade',
    description: 'Verify your identity by providing more details to upgrade your account',
    actionText: 'Tap to view pending upgrades',
    icon: <Upgrade />,
  },
  {
    id: 1,
    title: 'Complete your Loan Application',
    description: 'Give us all your KYC information to get your loan reviewed.',
    actionText: 'Tap to provide pending KYC',
    icon: <Money />,
  },
  {
    id: 2,
    title: 'Create a #tag',
    description: 'Receive money instantly from Sycamore friends with your unique tag',
    actionText: 'Tap to create tag',
    icon: <Misc2 />,
  },
];

export const billTypes = [
  { id: 0, title: 'Airtime', icon: <Sim />, bgColor: '#A6C2FA', bdColor: '#2166F3' },
  { id: 0, title: 'Data', icon: <Data />, bgColor: '#C5B9F4', bdColor: '#6D51E4' },
  { id: 0, title: 'Electricity', icon: <Power />, bgColor: '#FCD9ED', bdColor: '#EB0086' },
  { id: 0, title: 'Cable', icon: <Cable />, bgColor: '#FFC899', bdColor: '#FF7600' },
];

export const accountLevels = [
  {
    id: 0,
    type: 'Tier 1',
    icon: require('../assets/images/bronze.png'),
    txnLimit: '₦50,000.00',
    dailyLimit: '₦200,000.00',
    level: true,
    status: null,
  },
  {
    id: 1,
    type: 'Tier 2',
    icon: require('../assets/images/silver.png'),
    txnLimit: '₦500,000.00',
    dailyLimit: '₦1,000,000.00',
    level: false,
    status: 'pending',
  },
  {
    id: 2,
    type: 'Tier 3',
    icon: require('../assets/images/gold.png'),
    txnLimit: '₦5,000,000.00',
    dailyLimit: '₦5,000,000.00',
    level: false,
    status: null,
  },
];

export const beneficiaries = [
  { id: 0, name: 'Adetola Abiodun' },
  { id: 1, name: 'Alimi Godfrey' },
  { id: 2, name: 'Alex Emioluwa' },
  { id: 3, name: 'kalid Makanju' },
  { id: 4, name: 'Samuel Jones' },
  { id: 5, name: 'Biola Davies' },
  { id: 6, name: 'John Smith' },
  { id: 7, name: 'Chibuzor Davies' },
  { id: 8, name: 'Bola Aderin' },
];

export const transactions = [
  {
    id: 0,
    icon: require('../assets/images/access.png'),
    title: 'Adetola Joshua Abiodun',
    value: '450,000',
    createdAt: '2024-06-01T12:23:45.678Z',
  },
  {
    id: 1,
    icon: require('../assets/images/monipoint.jpeg'),
    title: 'Precious Odum',
    value: '5,100',
    createdAt: '2024-06-01T09:34:56.789Z',
  },
  {
    id: 2,
    icon: require('../assets/images/zenith.png'),
    title: 'Bunmi Otoboh',
    value: '47,000',
    createdAt: '2024-06-05T09:34:56.789Z',
  },
  {
    id: 3,
    icon: require('../assets/images/logo.png'),
    title: 'Daniel Anyaegbu ',
    value: '540,000',
    createdAt: '2024-06-04T09:34:56.789Z',
  },
];

export const banks = [
  {
    name: 'Access Bank',
    slug: 'access-bank',
    code: '044',
    ussd: '*901#',
    logo: 'https://nigerianbanks.xyz/logo/access-bank.png',
  },
  {
    name: 'Access Bank (Diamond)',
    slug: 'access-bank-diamond',
    code: '063',
    ussd: '*426#',
    logo: 'https://nigerianbanks.xyz/logo/access-bank-diamond.png',
  },
  {
    name: 'ALAT by WEMA',
    slug: 'alat-by-wema',
    code: '035A',
    ussd: '*945*100#',
    logo: 'https://nigerianbanks.xyz/logo/alat-by-wema.png',
  },
  {
    name: 'ASO Savings and Loans',
    slug: 'asosavings',
    code: '401',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/asosavings.png',
  },
  {
    name: 'Bowen Microfinance Bank',
    slug: 'bowen-microfinance-bank',
    code: '50931',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'CEMCS Microfinance Bank',
    slug: 'cemcs-microfinance-bank',
    code: '50823',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/cemcs-microfinance-bank.png',
  },
  {
    name: 'Citibank Nigeria',
    slug: 'citibank-nigeria',
    code: '023',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/citibank-nigeria.png',
  },
  {
    name: 'Ecobank Nigeria',
    slug: 'ecobank-nigeria',
    code: '050',
    ussd: '*326#',
    logo: 'https://nigerianbanks.xyz/logo/ecobank-nigeria.png',
  },
  {
    name: 'Ekondo Microfinance Bank',
    slug: 'ekondo-microfinance-bank',
    code: '562',
    ussd: '*540*178#',
    logo: 'https://nigerianbanks.xyz/logo/ekondo-microfinance-bank.png',
  },
  {
    name: 'Fidelity Bank',
    slug: 'fidelity-bank',
    code: '070',
    ussd: '*770#',
    logo: 'https://nigerianbanks.xyz/logo/fidelity-bank.png',
  },
  {
    name: 'First Bank of Nigeria',
    slug: 'first-bank-of-nigeria',
    code: '011',
    ussd: '*894#',
    logo: 'https://nigerianbanks.xyz/logo/first-bank-of-nigeria.png',
  },
  {
    name: 'First City Monument Bank',
    slug: 'first-city-monument-bank',
    code: '214',
    ussd: '*329#',
    logo: 'https://nigerianbanks.xyz/logo/first-city-monument-bank.png',
  },
  {
    name: 'Globus Bank',
    slug: 'globus-bank',
    code: '00103',
    ussd: '*989#',
    logo: 'https://nigerianbanks.xyz/logo/globus-bank.png',
  },
  {
    name: 'Guaranty Trust Bank',
    slug: 'guaranty-trust-bank',
    code: '058',
    ussd: '*737#',
    logo: 'https://nigerianbanks.xyz/logo/guaranty-trust-bank.png',
  },
  {
    name: 'Hasal Microfinance Bank',
    slug: 'hasal-microfinance-bank',
    code: '50383',
    ussd: '*322*127#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'Heritage Bank',
    slug: 'heritage-bank',
    code: '030',
    ussd: '*322#',
    logo: 'https://nigerianbanks.xyz/logo/heritage-bank.png',
  },
  {
    name: 'Jaiz Bank',
    slug: 'jaiz-bank',
    code: '301',
    ussd: '*389*301#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'Keystone Bank',
    slug: 'keystone-bank',
    code: '082',
    ussd: '*7111#',
    logo: 'https://nigerianbanks.xyz/logo/keystone-bank.png',
  },
  {
    name: 'Kuda Bank',
    slug: 'kuda-bank',
    code: '50211',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/kuda-bank.png',
  },
  {
    name: 'One Finance',
    slug: 'one-finance',
    code: '565',
    ussd: '*1303#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'Paga',
    slug: 'paga',
    code: '327',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/paga.png',
  },
  {
    name: 'Parallex Bank',
    slug: 'parallex-bank',
    code: '526',
    ussd: '*322*318*0#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'PayCom',
    slug: 'paycom',
    code: '100004',
    ussd: '*955#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'Polaris Bank',
    slug: 'polaris-bank',
    code: '076',
    ussd: '*833#',
    logo: 'https://nigerianbanks.xyz/logo/polaris-bank.png',
  },
  {
    name: 'Providus Bank',
    slug: 'providus-bank',
    code: '101',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'Rubies MFB',
    slug: 'rubies-mfb',
    code: '125',
    ussd: '*7797#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'Sparkle Microfinance Bank',
    slug: 'sparkle-microfinance-bank',
    code: '51310',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/sparkle-microfinance-bank.png',
  },
  {
    name: 'Stanbic IBTC Bank',
    slug: 'stanbic-ibtc-bank',
    code: '221',
    ussd: '*909#',
    logo: 'https://nigerianbanks.xyz/logo/stanbic-ibtc-bank.png',
  },
  {
    name: 'Standard Chartered Bank',
    slug: 'standard-chartered-bank',
    code: '068',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/standard-chartered-bank.png',
  },
  {
    name: 'Sterling Bank',
    slug: 'sterling-bank',
    code: '232',
    ussd: '*822#',
    logo: 'https://nigerianbanks.xyz/logo/sterling-bank.png',
  },
  {
    name: 'Suntrust Bank',
    slug: 'suntrust-bank',
    code: '100',
    ussd: '*5230#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'TAJ Bank',
    slug: 'taj-bank',
    code: '302',
    ussd: '*898#',
    logo: 'https://nigerianbanks.xyz/logo/taj-bank.png',
  },
  {
    name: 'TCF MFB',
    slug: 'tcf-mfb',
    code: '51211',
    ussd: '*908#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'Titan Trust Bank',
    slug: 'titan-trust-bank',
    code: '102',
    ussd: '*922#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'Union Bank of Nigeria',
    slug: 'union-bank-of-nigeria',
    code: '032',
    ussd: '*826#',
    logo: 'https://nigerianbanks.xyz/logo/union-bank-of-nigeria.png',
  },
  {
    name: 'United Bank For Africa',
    slug: 'united-bank-for-africa',
    code: '033',
    ussd: '*919#',
    logo: 'https://nigerianbanks.xyz/logo/united-bank-for-africa.png',
  },
  {
    name: 'Unity Bank',
    slug: 'unity-bank',
    code: '215',
    ussd: '*7799#',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'VFD',
    slug: 'vfd',
    code: '566',
    ussd: '',
    logo: 'https://nigerianbanks.xyz/logo/default-image.png',
  },
  {
    name: 'Wema Bank',
    slug: 'wema-bank',
    code: '035',
    ussd: '*945#',
    logo: 'https://nigerianbanks.xyz/logo/wema-bank.png',
  },
  {
    name: 'Zenith Bank',
    slug: 'zenith-bank',
    code: '057',
    ussd: '*966#',
    logo: 'https://nigerianbanks.xyz/logo/zenith-bank.png',
  },
];
