import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { MapPin, Phone, User } from 'lucide-react-native';
import { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileSetting() {
  const [name, setName] = useState('Shukumar');
  const [phone, setPhone] = useState('+16462713111');
  const [address, setAddress] = useState('123 Main Street, Dhaka');
  const [avatar, setAvatar] = useState<string | null>(
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d'
  );
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert('Photo library access is needed to change your profile picture.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets?.[0]) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`} edges={['top', 'bottom']}>
      <ScrollView
        style={tw`flex-1 px-5`}
        contentContainerStyle={tw`pb-6`}
        showsVerticalScrollIndicator={false}
      >
        <BackButton title="Profile Setting" />

        {/* Avatar */}
        <View style={tw`items-center mb-8`}>
          <View style={tw`relative`}>
            <Image
              source={{ uri: avatar ?? undefined }}
              style={tw`w-24 h-24 rounded-full bg-gray-100`}
            />
            <TouchableOpacity
              onPress={pickImage}
              style={tw`absolute bottom-0 right-0 w-8 h-8 rounded-full bg-amber-500 items-center justify-center border-2 border-white`}
            >
              <Ionicons name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Fields */}
        <InputField
          label="Full Name"
          Icon={User}
          value={name}
          onChangeText={setName}
          placeholder="Your full name"
        />

        <InputField
          label="Mobile Number"
          Icon={Phone}
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone number"
          keyboardType="phone-pad"
        />

        <InputField
          label="Address"
          Icon={MapPin}
          value={address}
          onChangeText={setAddress}
          placeholder="Your address"
        />
      </ScrollView>

      <View style={tw`px-5 pb-4 pt-2 border-t border-gray-100`}>
        <Button text={loading ? 'Saving...' : 'Save'} onPress={handleSave} loading={loading} />
      </View>
    </SafeAreaView>
  );
}