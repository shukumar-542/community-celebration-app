import tw from '@/lib/tw';
import { Eye, EyeOff, LucideIcon } from 'lucide-react-native';
import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

type InputFieldProps = TextInputProps & {
  label: string;
  Icon: LucideIcon;
};

const InputField = ({
  label,
  Icon,
  secureTextEntry,
  ...props
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View>
      <Text style={tw`text-base font-normal text-gray-900 mb-1`}>{label}</Text>

      <View
        style={[
          tw`flex-row items-center rounded-xl px-4 py-1 mb-4 border`,
          { borderColor: isFocused ? '#F7B115' : '#e5e7eb' },
        ]}
      >
        <Icon size={20} color="#4F4F59" />

        <TextInput
          placeholderTextColor="#4F4F59"
          style={tw`flex-1 text-gray-900 bg-transparent ml-2`}
          secureTextEntry={secureTextEntry && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Eye size={20} color="#4F4F59" />
            ) : (
              <EyeOff size={20} color="#4F4F59" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;