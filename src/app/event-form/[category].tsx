import DynamicForm from '@/components/forms/DynamicForm';
import BackButton from '@/components/ui/BackButton';
import { formSchemas } from '@/constants/form-schemas';
import tw from '@/lib/tw';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EventForm() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const schema = formSchemas[category];

  if (!schema || !schema.sections) {
    return (
      <SafeAreaView style={tw`flex-1 bg-white items-center justify-center`}>
        <Text style={tw`text-gray-400`}>Form not found for "{category}"</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-white`} >
      <KeyboardAwareScrollView
        style={tw`flex-1 px-5`}
        contentContainerStyle={tw`pb-4`}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bottomOffset={0}
      >
        <BackButton title={schema.title} />
        <DynamicForm schema={schema} onSubmit={(data) => console.log(data)} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}