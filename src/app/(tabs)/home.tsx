import tw from '@/lib/tw';
import { Text, View } from 'react-native';
export default function home() {
  return (
      <View style={tw`flex-1 items-center justify-center `}>
      <Text style={tw`text-2xl font-bold text-primary`}>Home</Text>
    </View>
  )
}