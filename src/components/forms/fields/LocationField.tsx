import { FormField } from '@/constants/form-schemas/types';
import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import { Control, Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

interface Props {
  field: FormField;
  control: Control<any>;
}

export default function LocationField({ field, control }: Props) {
  return (
    <Controller
      control={control}
      name={field.key}
      rules={{ required: field.required }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          <Text style={tw`text-gray-700 font-medium mb-1.5`}>
            {field.label}
            {field.required && <Text style={tw`text-amber-500`}> *</Text>}
          </Text>
          <View
            style={tw`flex-row items-center border ${
              error ? 'border-red-400' : 'border-gray-300'
            } rounded-xl px-4`}
          >
            <Ionicons name="location-outline" size={18} color="#9ca3af" />
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={field.placeholder ?? 'Full address'}
              placeholderTextColor="#9ca3af"
              style={tw`flex-1 py-3 px-2 text-gray-900`}
            />
          </View>
          {error && <Text style={tw`text-red-500 text-xs mt-1`}>This field is required</Text>}
        </View>
      )}
    />
  );
}