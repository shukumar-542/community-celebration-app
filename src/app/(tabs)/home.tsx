import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const timeFilters = ['Today', 'Tomorrow', 'This Week', 'All'];
const categoryFilters = ['All', 'Wedding', 'Seven Blessings', 'Engagement', 'Gift Giving'];

const events = [
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

export default function Home() {
  const [activeTimeFilter, setActiveTimeFilter] = useState('Today');
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <SafeAreaView style={tw`flex-1 bg-white`} edges={['top']}>
      <StatusBar style="dark" />
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tw`flex-row items-center justify-between px-5 pt-4 pb-2`}>
          <View>
            <Text style={tw`text-gray-500 text-base`}>Moshe! 👋</Text>
            <Text style={tw`text-2xl font-bold text-gray-900 mt-1`}>
              Discover Celebrations
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/search")}
            style={tw`w-11 h-11 rounded-xl border border-gray-300 items-center justify-center`}
          >
            <Ionicons name="search" size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* Time Filters */}
        <View style={tw`flex-row px-3 mt-2 gap-2`}>
          {timeFilters.map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setActiveTimeFilter(filter)}
              style={tw`flex-1 py-2 rounded-full items-center ${activeTimeFilter === filter ? 'bg-amber-500' : 'bg-gray-100'
                }`}
            >
              <Text
                style={tw`text-sm font-semibold ${activeTimeFilter === filter ? 'text-white' : 'text-gray-600'
                  }`}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Category Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mt-3`}
          contentContainerStyle={tw`gap-2 px-3`}
        >
          {categoryFilters.map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setActiveCategory(filter)}
              style={tw`px-4 py-2 rounded-full border ${activeCategory === filter
                ? 'bg-gray-900 border-gray-900'
                : 'bg-white border-gray-300'
                }`}
            >
              <Text
                style={tw`text-sm font-semibold ${activeCategory === filter ? 'text-white' : 'text-gray-600'
                  }`}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Event Cards */}
        <View style={tw`px-5 mt-5 gap-4 pb-4`}>
          {events.map((event) => (
            <TouchableOpacity
              key={event.id}
              onPress={() => router.push({
                pathname: '/event/[id]',
                params: { id: event.id },
              })}
              style={tw`rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100`}
            >
              <View style={tw`h-44 relative`}>
                <Image
                  source={{ uri: event.image }}
                  style={tw`w-full h-full`}
                  resizeMode="cover"
                />
                {/* Favorite Icon */}
                <TouchableOpacity
                  style={tw`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 items-center justify-center`}
                >
                  <Ionicons
                    name={event.favorited ? 'heart' : 'heart-outline'}
                    size={18}
                    color={event.favorited ? '#f59e0b' : '#374151'}
                  />
                </TouchableOpacity>
                {/* Category Badge */}
                <View style={tw`absolute bottom-3 left-3 bg-amber-500 px-3 py-1 rounded-full`}>
                  <Text style={tw`text-white text-xs font-bold`}>{event.category}</Text>
                </View>
              </View>

              <View style={tw`p-4`}>
                <Text style={tw`text-gray-900 text-base font-bold`}>{event.title}</Text>
                <View style={tw`flex-row items-center mt-2 gap-1.5`}>
                  <Ionicons name="calendar-outline" size={14} color="#9ca3af" />
                  <Text style={tw`text-gray-500 text-sm`}>{event.date}</Text>
                </View>
                <View style={tw`flex-row items-center mt-1 gap-1.5`}>
                  <Ionicons name="location-outline" size={14} color="#9ca3af" />
                  <Text style={tw`text-gray-500 text-sm`}>{event.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}