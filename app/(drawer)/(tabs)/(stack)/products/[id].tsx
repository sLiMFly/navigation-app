import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((p) => p.id == id);


  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Product',
    });
  }, [product]);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2 ">
      <Text className="font-work-black text-2xl text-center">{product.title}</Text>
      <Text className="text-center">{product.description}</Text>
      <View className='flex-row justify-center'>
        <Image source={require(`../../../../../assets/images/product1.jpg`)} className='mt-10   items-center' />
      </View>
      <Text className='font-work-black text-2xl mt-10 text-center'>${product.price}</Text>
      <Text className='bg-primary text-white font-work-medium p-2 rounded-md mt-5 text-center '>Buy</Text>
    </View>
  );
}; export default ProductScreen;
