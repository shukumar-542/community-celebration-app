import tw from '@/lib/tw';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData, View } from 'react-native';

export interface OTPInputHandle {
  clear: () => void;
}

interface Props {
  length?: number;
  onChange: (digits: string[]) => void;
  onComplete?: (otp: string) => void;
}

const OTPInput = forwardRef<OTPInputHandle, Props>(({ length = 6, onChange, onComplete }, ref) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValues(Array(length).fill(''));
      inputRefs.current[0]?.focus();
    },
  }));

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, '').slice(-1);
    const newValues = [...values];
    newValues[index] = digit;
    setValues(newValues);
    onChange(newValues);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newValues.every((v) => v !== '')) {
      onComplete?.(newValues.join(''));
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={tw`flex-row gap-2`}>
      {values.map((value, index) => (
        <TextInput
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="number-pad"
          maxLength={1}
          style={tw`w-12 h-14 border ${
            value ? 'border-amber-500' : 'border-gray-300'
          } rounded-xl text-center text-xl font-bold text-gray-900`}
        />
      ))}
    </View>
  );
});

OTPInput.displayName = 'OTPInput';

export default OTPInput;