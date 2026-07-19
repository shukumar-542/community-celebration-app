import { EventFormSchema } from '@/constants/form-schemas/types';
import tw from '@/lib/tw';
import { Ionicons } from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import DateField from './fields/DateField';
import ImageField from './fields/ImageField';
import LocationField from './fields/LocationField';
import TextField from './fields/TextField';
import TimeField from './fields/TimeField';

interface Props {
    schema: EventFormSchema;
    onSubmit: (data: any) => void;
}

export default function DynamicForm({ schema, onSubmit }: Props) {
    const { control, handleSubmit } = useForm();

    return (
        <View style={tw`gap-6`}>
            {schema.sections.map((section, idx) => (
                <View key={idx} style={tw`${section.title ? 'border border-gray-200 rounded-2xl p-4' : ''
                    } gap-3`}>
                    {section.title ? (
                        <View style={tw`border-b border-gray-200 pb-2 mb-2`}>
                            <Text style={tw`text-base font-bold text-gray-900`}>{section.title}</Text>
                            {section.description && (
                                <Text style={tw`text-gray-400 text-xs mt-0.5`}>{section.description}</Text>
                            )}
                        </View>
                    ) : null}

                    {section.fields.map((field) => {
                        switch (field.type) {
                            case 'text':
                            case 'textarea':
                                return <TextField key={field.key} field={field} control={control} />;
                            case 'date':
                                return <DateField key={field.key} field={field} control={control} />;
                            case 'image':
                                return <ImageField key={field.key} field={field} control={control} />;
                            case 'location':
                                return <LocationField key={field.key} field={field} control={control} />;
                            case 'time':
                                return <TimeField key={field.key} field={field} control={control} />;
                            default:
                                return null;
                        }
                    })}
                </View>
            ))}

            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={tw`bg-primary py-3 rounded-full items-center  flex-row justify-center gap-2`}
            >
                <Text style={tw`text-white font-bold text-base`}>Review Submission</Text>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
}