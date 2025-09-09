import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { styles } from './styles';
import { createGroup } from '../api';
import { TextInput } from 'react-native-gesture-handler';

interface ModalComponentProps {
    visible: boolean;
    onClose: () => void;
    session: string | null;
    onGroupCreated:() => void;
}

const CreateGroupModalComponent: React.FC<ModalComponentProps> = ({ visible, onClose, session, onGroupCreated }) => {
    const [groupName, setGroupName] = useState('');
    const[error, setError] = useState<string | null>(null);

    const handleCreateGroup = async () => {
        if (groupName.trim() === '') {
            setError('Group name connot be empty');
            return;
        }
        console.log("token in create group component: ")
        console.log(session)
        try {
            
            await createGroup(groupName, session);
            setError(null);
            setGroupName('');
            onGroupCreated();
            onClose();
        } catch (err) {
            setError('Failed to create group');
            console.error(err);
        }
    };

    return(
        <Modal
            animationType='slide'
            transparent={false}
            visible={visible}
            onRequestClose={onClose}>
                <View style={styles.overlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Create New Group</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Group Name"
                            placeholderTextColor="gray"
                            value={groupName}
                            onChangeText={setGroupName}
                        />
                        
                        <View style={styles.buttonSpacing}>
                            <Button title="Create Group" onPress={handleCreateGroup} />
                        </View>

                        <View style={styles.buttonSpacing}>
                            <Button title="Close" onPress={onClose} />
                        </View>                    
                    </View>                        
                </View>
            </Modal>
    )
}
  
export default CreateGroupModalComponent;