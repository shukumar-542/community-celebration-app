import { FormField } from '@/constants/form-schemas/types';
import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  field: FormField;
  control: Control<any>;
}

export default function TimeField({ field, control }: Props) {
  const [showPicker, setShowPicker] = useState(false);

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

          <TouchableOpacity
            onPress={() => setShowPicker(true)}
            style={tw`flex-row items-center border ${
              error ? 'border-red-400' : 'border-gray-300'
            } rounded-xl px-4 py-3`}
          >
            <Ionicons name="time-outline" size={18} color="#9ca3af" />
            <Text style={tw`ml-2 text-gray-900 ${!value ? 'text-gray-400' : ''}`}>
              {value
                ? new Date(value).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : 'Select time'}
            </Text>
          </TouchableOpacity>

          {error && <Text style={tw`text-red-500 text-xs mt-1`}>This field is required</Text>}

          {showPicker && (
            <DateTimePicker
              value={value ? new Date(value) : new Date()}
              mode="time"
              onValueChange={(event, selectedTime) => {
                setShowPicker(false);
                if (selectedTime) {
                  onChange(selectedTime.toISOString());
                }
              }}
              onDismiss={() => setShowPicker(false)}
            />
          )}
        </View>
      )}
    />
  );
}