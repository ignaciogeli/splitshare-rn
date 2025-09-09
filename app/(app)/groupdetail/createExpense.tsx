import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { styles } from '../styles';
import { createExpense } from '../../api';
import { TextInput } from 'react-native-gesture-handler';

interface ModalComponentProps {
    visible: boolean;
    onClose: () => void;
    session: string | null;
    onGroupCreated:() => void;
}

const CreateExpenseModalComponent: React.FC<ModalComponentProps> = ({ visible, onClose, session, onGroupCreated }) => {
    const [expenseDescription, setExpenseDescription] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const[error, setError] = useState<string | null>(null);

    const handleCreateExpense = async () => {
        if (expenseDescription.trim() === '') {
            setError('Description connot be empty');
            return;
        }
        var amount: number = +expenseAmount;
        if (amount < 0) {
            setError('Amount should be greater than 0');
            return;
        }
        console.log(session)
        try {
            
            await createExpense(amount, 1, "ARS", 1, "shared", expenseDescription, session);
            setError(null);
            setExpenseDescription('');
            onGroupCreated();
            onClose();
        } catch (err) {
            setError('Failed to create expense');
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
                        <Text style={styles.modalTitle}>Create New Expense</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            placeholderTextColor="gray"
                            value={expenseDescription}
                            onChangeText={setExpenseDescription}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Amount"
                            placeholderTextColor="gray"
                            onChangeText={setExpenseAmount}
                            // value={expenseDescription}
                        />


                        <View style={styles.buttonSpacing}>
                            <Button title="Create Expense" onPress={handleCreateExpense} />
                        </View>

                        <View style={styles.buttonSpacing}>
                            <Button title="Close" onPress={onClose} />
                        </View>                    
                    </View>                        
                </View>
            </Modal>
    )
}
  
export default CreateExpenseModalComponent;