import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const stats = [
  { label: 'Events Saved', value: 4 },
  { label: 'Submitted', value: 3 },
  { label: 'Approved', value: 1 },
];



export default function Profile() {
  const router = useRouter();

  const menuItems = [
  { icon: 'person-outline', label: 'Profile Setting', onPress: () => router.push("/(settings)/editProfile" as any) },
  { icon: 'lock-closed-outline', label: 'Change password', onPress: () => router.push("/(settings)/changePasswordFromSettings" as any) },
  { icon: 'information-circle-outline', label: 'About Us', onPress: () => router.push("/(settings)/about-us" as any) },
  { icon: 'document-lock-outline', label: 'Privacy Policy', onPress: () => router.push("/(settings)/privacyPolicy" as any) },
  { icon: 'document-text-outline', label: 'Terms and Conditions', onPress: () => router.push("/(settings)/termsCondition" as any) },
]; 

  return (
    <SafeAreaView style={tw`flex-1 bg-white`} edges={['top']}>
      <StatusBar style="dark" />
      <ScrollView
        style={tw`flex-1 px-5`}
        contentContainerStyle={tw`pb-6`}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text style={tw`text-2xl font-bold text-gray-900 mt-4 mb-5`}>Profile</Text>

        {/* User Info */}
        <View style={tw`flex-row items-center mb-5`}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d' }}
            style={tw`w-14 h-14 rounded-xl `}
          />
          <View style={tw`ml-3`}>
            <Text style={tw`text-lg font-bold text-gray-900`}>Nahid</Text>
            <Text style={tw`text-gray-400 text-sm`}>nahid@gmail.com</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={tw`flex-row gap-3 mb-6`}>
          {stats.map((stat) => (
            <View
              key={stat.label}
              style={tw`flex-1 border border-gray-200 rounded-2xl py-4 items-center`}
            >
              <Text style={tw`text-xl font-bold text-gray-900`}>{stat.value}</Text>
              <Text style={tw`text-gray-400 text-xs mt-1 text-center`}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu List */}
        <View style={tw`border border-gray-200 rounded-2xl overflow-hidden mb-6`}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.label}
               onPress={item.onPress}
              style={tw`flex-row items-center justify-between px-4 py-4 ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <View style={tw`flex-row items-center gap-3`}>
                <Ionicons name={item.icon as any} size={20} color="#374151" />
                <Text style={tw`text-gray-900 text-base`}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={tw`flex-row items-center justify-center gap-2 border border-amber-400 rounded-full py-3.5`}
        >
          <Ionicons name="log-out-outline" size={18} color="#f59e0b" />
          <Text style={tw`text-amber-500 font-semibold text-base`}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}