import {useAccount} from 'wagmi';

export default function useAddress() {
  const account = useAccount();
  if (account && account.isConnected) {
    return account.address.toLowerCase();
  }
}
