import DynamicForm from '@/components/forms/DynamicForm';
import { formSchemas } from '@/constants/form-schemas';
import tw from '@/lib/tw';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/components/ui/BackButton';

export default function EventForm() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const schema = formSchemas[category];

  if (!schema) return null;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`} edges={['bottom']}>
      <ScrollView
        style={tw`flex-1 px-5 pt-4`}
        contentContainerStyle={tw`pb-6`}
        showsVerticalScrollIndicator={false}
      >

        <BackButton title={schema.title} />
        <DynamicForm schema={schema} onSubmit={(data) => console.log(data)} />
      </ScrollView>
    </SafeAreaView>
  );
}