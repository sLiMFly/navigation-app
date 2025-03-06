import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';
const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push('/products')}
        >
          Products
        </CustomButton>

        <CustomButton
          onPress={() => router.push('/profile')}
          className="mb-2"
          color="secondary"
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push('/settings')}
          className="mb-2"
          color="tertiary"
        >
          Settings
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Products
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Menu</CustomButton>

        {/* <Link className="mb-5" href="/products">
          Products{' '}
        </Link>
        <Link className="mb-5" href="/profile">
          Profile{' '}
        </Link>
        <Link className="mb-5" href="/settings">
          Settings{' '}
        </Link> */}
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
