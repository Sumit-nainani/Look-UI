import { useCallback, useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    FlatList,
    Image,
} from 'react-native';
import { COLORS } from '../../../constants/theme';
import styles from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { UserGenderText } from '../../../constants/text';
import { Images } from '../../../constants';
import { GENEDER_OPTION } from '../../../constants/common';

type UserGenderProps = NativeStackScreenProps<RootStackParamList, 'UserGender'>;


const UserGender = ({ navigation }: UserGenderProps) => {
    const [userGender, setUserGender] = useState<string>('');
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);

    const handleGenderSelect = (gender: string) => {
        setSelectedGender(gender);
        setModalVisible(false);
        setIsEnabled(true);
    };

    useEffect(() => {
        if (userGender.length && !isEnabled) {
            setIsEnabled(true);
        } else if (!userGender.length) {
            setIsEnabled(false);
        }
    }, [userGender]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.enterText}>{UserGenderText.Gender}</Text>
                <TouchableOpacity
                    style={styles.textInputBg}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.inputText}>
                        {selectedGender || UserGenderText.SelectGender}
                    </Text>
                </TouchableOpacity>

                {/* Modal for Gender Options */}
                <Modal
                    visible={isModalVisible}
                    animationType="slide"
                    transparent
                    onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <View style={styles.rowFlex}>
                                <View style={styles.flexOne}>
                                    <Text style={styles.modalTitle}>
                                        {UserGenderText.SelectGender}
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Image
                                        source={Images.closeIcon}
                                        style={styles.closeIcon}></Image>
                                </TouchableOpacity>
                            </View>
                            <View>
                                {GENEDER_OPTION.map((key, index) => (
                                    <TouchableOpacity key={index} style={styles.option} onPress={() => handleGenderSelect(key)}><Text key={index} style={styles.optionText}>{key}</Text></TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('UserPhone')}
                style={
                    isEnabled
                        ? styles.enabledTouchableViewBg
                        : styles.disabledTouchableViewBg
                }>
                <Text
                    style={isEnabled ? styles.enabledNextText : styles.disabledNextText}>
                    {UserGenderText.Next}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserGender;
