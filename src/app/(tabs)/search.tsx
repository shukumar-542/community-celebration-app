import EventCard from '@/components/ui/EventCard';
import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const allEvents = [
  {
    id: '1',
    title: 'Bar Mitzvah of Elijah Goldstein',
    date: 'August 3, 2025',
    location: 'Temple Beth Shalom, Brooklyn',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    favorited: false,
  },
  {
    id: '2',
    title: 'Rosh Hashanah Community Dinner',
    date: 'October 2, 2025',
    location: 'Jewish Community Center, Bronx',
    category: 'Seven Blessings',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485',
    favorited: true,
  },
];

export default function Search() {
  const [query, setQuery] = useState('');

  const filteredEvents = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return allEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(lower) ||
        event.category.toLowerCase().includes(lower) ||
        event.location.toLowerCase().includes(lower)
    );
  }, [query]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`} edges={['top']}>
      <StatusBar style="dark" />

      <View style={tw`px-5 pt-4`}>
        <Text style={tw`text-2xl font-bold text-gray-900 mb-4`}>Search</Text>

        {/* Search Input */}
        <View style={tw`flex-row items-center bg-gray-50 border border-gray-200 rounded-xl px-4`}>
          <Ionicons name="search" size={18} color="#9ca3af" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search celebrations, categories..."
            placeholderTextColor="#9ca3af"
            style={tw`flex-1 py-3 px-2 text-gray-900`}
          />
          {query.length > 0 && (
            <Ionicons
              name="close-circle"
              size={18}
              color="#9ca3af"
              onPress={() => setQuery('')}
            />
          )}
        </View>
      </View> 

      <ScrollView
        style={tw`flex-1`}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={tw`px-5 mt-4 gap-4 pb-4`}>
          {query.trim().length === 0 ? (
            <Text style={tw`text-gray-400 text-center mt-10`}>
              Start typing to search celebrations
            </Text>
          ) : filteredEvents.length === 0 ? (
            <Text style={tw`text-gray-400 text-center mt-10`}>
              No results found for "{query}"
            </Text>
          ) : (
            filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}