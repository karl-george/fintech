import { Currency } from '@/interfaces/crypto';
import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';

const Page = () => {
  const currencies = useQuery({
    queryKey: ['currencies'],
    queryFn: () => fetch('/api/listings').then((res) => res.json()),
  });

  return (
    <View>
      {currencies.data?.map((currency: Currency) => (
        <Text key={currency.id}>{currency.name}</Text>
      ))}
    </View>
  );
};

export default Page;
