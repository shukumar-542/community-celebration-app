import tw from '@/lib/tw';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    text: string;
    loading?: boolean;
    disabled?: boolean;
}

export default function Button({ text, loading, style, disabled, ...rest }: ButtonProps) {
    const isDisabled = disabled || loading;
    return (
        <TouchableOpacity
            onPress={() => { }}
            style={[
                tw`py-4 rounded-full bg-primary items-center justify-center  ${isDisabled ? 'opacity-50' : ''
                    }`,
                style, 
            ]}
            disabled={isDisabled}
            {...rest}
        >
            <Text style={tw`text-white font-bold text-base`}>{text}</Text>
        </TouchableOpacity>
    )
}