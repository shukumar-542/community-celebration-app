import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
}

export default function BackButton({ title, onPress }: Props) {
  const router = useRouter();

  return (
    <View style={tw`flex-row items-center mb-4 mt-5`}>
      <TouchableOpacity
        onPress={onPress ?? (() => router.back())}
        style={tw`border border-gray-200 rounded-xl p-2 mr-3`}
      >
        <Ionicons name="arrow-back" size={22} color="#000000" />
      </TouchableOpacity>
      <Text style={tw`text-xl font-semibold`}>{title}</Text>
    </View>
  );
}