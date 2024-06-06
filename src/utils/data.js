import Data from '@/components/Icons/app/data';
import Investment from '@/components/Icons/app/investment';
import Loan from '@/components/Icons/app/loan';
import Misc1 from '@/components/Icons/app/misc_1';
import Misc2 from '@/components/Icons/app/misc_2';
import Money from '@/components/Icons/app/money';
import Money2 from '@/components/Icons/app/money2';
import Savings from '@/components/Icons/app/savings';
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
