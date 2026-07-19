import BackButton from '@/components/ui/BackButton'
import Button from '@/components/ui/Button'
import InputField from '@/components/ui/InputField'
import tw from '@/lib/tw'
import { Lock } from 'lucide-react-native'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ChangePasswordFromSettings() {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const handleChangePassword = async () => {
    
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F6FA' }}   edges={['top']}>
      <View style={tw`flex-1 px-4`}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <BackButton title='Change Password' />

          <View style={tw`mt-10`}>

            <InputField
              label="Old Password"
              Icon={Lock}
              placeholder="••••••••"
              value={oldPassword}
              onChangeText={setOldPassword}
              secureTextEntry
            />
            <InputField
              label="New Password"
              Icon={Lock}
              placeholder="••••••••"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
            <InputField
              label="Confirm New Password"
              Icon={Lock}
              placeholder="••••••••"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            <Button
              text="Save"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}