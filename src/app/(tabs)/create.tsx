import tw from '@/lib/tw';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Create() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white items-center justify-center`} edges={['top']}>
      <StatusBar style="dark" />
      <Text style={tw`text-gray-400 text-base`}>Create event screen - coming soon</Text>
    </SafeAreaView>
  );
}