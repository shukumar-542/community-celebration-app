import { FormField } from '@/constants/form-schemas/types';
import tw from '@/lib/tw';
import { Control, Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

interface Props {
  field: FormField;
  control: Control<any>;
}

export default function TextField({ field, control }: Props) {
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
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={field.placeholder ?? field.label}
            placeholderTextColor="#9ca3af"
            multiline={field.type === 'textarea'}
            style={tw`border ${
              error ? 'border-red-400' : 'border-gray-300'
            } rounded-xl px-4 py-3 text-gray-900 ${field.type === 'textarea' ? 'h-24' : ''}`}
          />
          {error && <Text style={tw`text-red-500 text-xs mt-1`}>This field is required</Text>}
        </View>
      )}
    />
  );
}