import { FormField } from '@/constants/form-schemas/types';
import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Control, Controller } from 'react-hook-form';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  field: FormField;
  control: Control<any>;
}

export default function ImageField({ field, control }: Props) {
  return (
    <Controller
      control={control}
      name={field.key}
      rules={{ required: field.required }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const pickImage = async () => {
          const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (!permission.granted) {
            alert('Photo library access is needed to choose a cover image.');
            return;
          }

          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: false, 
            quality: 0.8,
          });

          if (!result.canceled && result.assets?.[0]) {
            onChange(result.assets[0].uri);
          }
        };

        return (
          <View>
            <TouchableOpacity
              onPress={pickImage}
              style={tw`border ${
                error ? 'border-red-400' : 'border-gray-300'
              } border-dashed rounded-2xl items-center justify-center py-8 px-4 bg-gray-50`}
            >
              {value ? (
                <Image source={{ uri: value }} style={tw`w-full h-40 rounded-xl`} resizeMode="cover" />
              ) : (
                <>
                  <Ionicons name="image-outline" size={28} color="#9ca3af" />
                  <Text style={tw`text-gray-500 text-sm mt-2`}>{field.label}</Text>
                </>
              )}

              <View style={tw`bg-white border border-gray-300 rounded-full px-4 py-1.5 mt-3`}>
                <Text style={tw`text-gray-700 text-xs font-semibold`}>
                  {value ? 'Change File' : 'Browse File'}
                </Text>
              </View>
            </TouchableOpacity>

            {error && <Text style={tw`text-red-500 text-xs mt-1`}>This field is required</Text>}
          </View>
        );
      }}
    />
  );
}