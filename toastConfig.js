import { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        width: '95%',
        backgroundColor: '#e0ffe0',
        borderLeftColor: 'green',
        borderRadius: 10,
        paddingHorizontal: 10,
      }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#008000',
      }}
      text2Style={{
        fontSize: 14,
        color: '#006400',
      }}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      style={{
        width: '95%',
        backgroundColor: '#ffe0e0',
        borderLeftColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 10,
      }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#ff0000',
      }}
      text2Style={{
        fontSize: 14,
        color: '#b00000',
      }}
    />
  ),
};
