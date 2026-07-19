import { useDebouncedRouter } from '@/hooks/useDebouncedRouter';
import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';

export default function EventCard(
    { event }: { event: any }
) {
    const { push } = useDebouncedRouter();
    return (
        <TouchableOpacity
            onPress={() =>
                push({
                    pathname: '/event/[id]',
                    params: { id: event.id },
                })
            }
            style={tw`rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100`}
        >
            <View style={tw`h-44 relative`}>
                <Image source={{ uri: event.image }} style={tw`w-full h-full`} contentFit="cover" />

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
    )
}