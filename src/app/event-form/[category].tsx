import DynamicForm from '@/components/forms/DynamicForm';
import { formSchemas } from '@/constants/form-schemas';
import tw from '@/lib/tw';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text } from 'react-native';

export default function EventForm() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const schema = formSchemas[category];

  if (!schema) return null;

  return (
    <ScrollView style={tw`flex-1 bg-white px-5 pt-4`}>
      <Text style={tw`text-xl font-bold text-gray-900 mb-4`}>{schema.title}</Text>
      <DynamicForm schema={schema} onSubmit={(data) => console.log(data)} />
    </ScrollView>
  );
}