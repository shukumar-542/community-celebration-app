import EventCard from '@/components/ui/EventCard';
import tw from '@/lib/tw';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Saved() {

  const events = [
    {
      id: '1',
      title: 'Bar Mitzvah of Elijah Goldstein',
      date: 'August 3, 2025',
      location: 'Temple Beth Shalom, Brooklyn',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      favorited: true,
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
    {
      id: '3',
      title: 'Rosh Hashanah Community Dinner',
      date: 'October 2, 2025',
      location: 'Jewish Community Center, Bronx',
      category: 'Seven Blessings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      favorited: true,
    },
    
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`} edges={['top']}>
      <StatusBar style="dark" />
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        <Text style={tw`text-2xl font-bold text-gray-900 px-5 mt-4 mb-2`}>Saved Events</Text>

        <View style={tw`px-5 mt-3 gap-4 pb-4`}>
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}