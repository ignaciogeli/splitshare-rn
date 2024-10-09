import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { styles } from './styles';

interface ModalComponentProps {
    visible: boolean;
    onClose: () => void;
}

const CreateGroupModalComponent: React.FC<ModalComponentProps> = ({ visible, onClose }) => {
    return(
        <Modal
            animationType='slide'
            transparent={false}
            visible={visible}
            onRequestClose={onClose}>
                <View style={styles.overlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Create New Group</Text>
                        <Text>This is where you can create a new group.</Text>
                        <Button title="Close" onPress={onClose} />
                    </View>                        
                </View>
            </Modal>
    )
}
  
export default CreateGroupModalComponent;