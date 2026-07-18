import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EventDetail() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [favorited, setFavorited] = useState(false);

    const event = {
        title: 'Bar Mitzvah of Eliyahu Goldstein',
        category: 'Wedding',
        host: { name: 'Nahid', email: 'nahid@gmail.com' },
        date: 'August 3, 2025',
        time: '9:00 AM',
        venue: 'Temple Beth Shalom, Brooklyn',
        about:
            'Join us as Eliyahu reads from the Torah and becomes a full member of the Jewish community. A festive kiddush luncheon follows the service.',
        heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552',
        family: [
            { role: "Bar Mitzvah Boy's Name", name: 'Eliyahu Goldstein' },
            { role: "Father's Name", name: 'Rabbi Menachem Goldstein' },
            { role: 'Son of Rabbi', name: 'Rabbi Yisroel Goldstein' },
            { role: 'Son-in-law of Rabbi', name: 'Rabbi Chaim Weiss' },
        ],
    };

    return (
        <View style={tw`flex-1 bg-white`}>
            <StatusBar style="light" />
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                {/* Hero Image */}
                <View style={tw`h-50 relative`}>
                    <Image source={{ uri: event.heroImage }} style={tw`w-full h-full`} resizeMode="cover" />

                    <SafeAreaView style={tw`absolute top-0 left-0 right-0`} edges={['top']}>
                        <View style={tw`flex-row items-center justify-between px-4 pt-2`}>
                            <TouchableOpacity
                                onPress={() => router.back()}
                                style={tw`w-10 h-10 rounded-full bg-white/90 items-center justify-center`}
                            >
                                <Ionicons name="chevron-back" size={22} color="#111827" />
                            </TouchableOpacity>

                            <View style={tw`flex-row gap-2`}>
                                <TouchableOpacity
                                    style={tw`w-10 h-10 rounded-full bg-white/90 items-center justify-center`}
                                >
                                    <Ionicons name="share-outline" size={19} color="#111827" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setFavorited(!favorited)}
                                    style={tw`w-10 h-10 rounded-full bg-white/90 items-center justify-center`}
                                >
                                    <Ionicons
                                        name={favorited ? 'heart' : 'heart-outline'}
                                        size={19}
                                        color={favorited ? '#f59e0b' : '#111827'}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>

                {/* Content */}
                <View style={tw`px-5 pt-5`}>
                    {/* Category Badge */}
                    <View style={tw`bg-primary self-start px-3 py-1 rounded-full mb-3`}>
                        <Text style={tw`text-white text-xs font-bold`}>{event.category}</Text>
                    </View>

                    {/* Title */}
                    <Text style={tw`text-2xl font-bold text-secondary leading-snug`}>{event.title}</Text>

                    {/* Host Info */}
                    <View style={tw`flex-row items-center mt-4 border border-gray-200 rounded-xl px-2 py-2 `}>
                        <View style={tw`w-10 h-10 rounded-md bg-gray-200 items-center justify-center`}>
                            <Ionicons name="person" size={18} color="#6b7280" />
                        </View>
                        <View style={tw`ml-3`}>
                            <Text style={tw`text-secondary font-semibold`}>{event.host.name}</Text>
                            <Text style={tw`text-secondary text-sm`}>{event.host.email}</Text>
                        </View>
                    </View>

                    {/* Date & Time */}
                    <View style={tw`flex-row items-center mt-4 gap-3 border border-gray-200 rounded-xl px-2 py-2`}>
                        <View style={tw`w-9 h-9 rounded-md bg-[#FEF7E8] items-center justify-center`}>
                            <Ionicons name="calendar" size={16} color="#F7B115" />
                        </View>
                        <Text style={tw`text-secondary text-base`}>
                            {event.date} · {event.time}
                        </Text>
                    </View>

                    {/* Venue */}
                    <View style={tw`flex-row items-center mt-3 gap-3 border border-gray-200 rounded-xl px-2 py-2`}>
                        <View style={tw`w-9 h-9 rounded-md bg-[#FEF7E8] items-center justify-center`}>
                            <Ionicons name="location" size={16} color="#F7B115" />
                        </View>
                        <Text style={tw`text-secondary text-base flex-1`}>{event.venue}</Text>
                    </View>

                    {/* About Section */}
                    <Text style={tw`text-lg font-bold text-gray-900 mt-6 mb-2`}>
                        About this Celebration
                    </Text>
                    <Text style={tw`text-[#4F4F59] text-[14px] leading-relaxed`}>{event.about}</Text>

                    {/* Map Section */}
                    <View style={tw`flex-row items-center justify-between mt-6 mb-2`}>
                        <Text style={tw`text-lg font-bold text-gray-900`}>Location on Map</Text>
                        <TouchableOpacity>
                            <Text style={tw`text-amber-500 font-semibold text-sm`}>Get Directions</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={tw`h-40 rounded-2xl bg-gray-100 items-center justify-center overflow-hidden`}
                    >
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b',
                            }}
                            style={tw`w-full h-full absolute`}
                            resizeMode="cover"
                        />
                        <View style={tw`absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-lg`}>
                            <Text style={tw`text-xs text-gray-600`}>Tap to open full map</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Celebration Details */}
                    <Text style={tw`text-lg font-bold text-gray-900 mt-6 mb-1`}>🎉 Celebration Details</Text>
                    <Text style={tw`text-gray-500 text-sm mb-3`}>Bar Mitzvah Boy</Text>

                    <View style={tw`gap-2 mb-15`}>
                        {event.family.map((member, index) => (
                            <View key={index} style={tw`flex-row items-start gap-3 border border-gray-100 rounded-xl p-3`}>
                                <View style={tw`w-8 h-8 rounded-xl bg-[#FEF7E8] items-center justify-center`}>
                                    <View style={tw`w-2 h-2 rounded-full bg-amber-500`} />
                                </View>
                                <View style={tw`flex-1`}>
                                    <Text style={tw`text-[#4F4F59] text-xs`}>{member.role}</Text>
                                    <Text style={tw`text-[#000000] font-semibold text-base`}>{member.name}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}