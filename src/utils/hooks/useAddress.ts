import {useAccount} from 'wagmi';

export default function useAddress() {
  const account = useAccount();
  if (account.isConnected) {
    return account.address.toLowerCase();
  }
}
