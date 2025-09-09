import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { Colors } from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

interface Group {
    id: number;
    name: string;
    totals: Record<string, number> | null;
}

interface GroupListProps {
    groups: Group[]
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
    const router = useRouter();

    return (
        <FlatList
            data={groups}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => router.push(`/groupdetail/${item.id}`)}
                >
                    {/* Usar View para contener el texto y el Link sólo para la navegación */}
                    <View style={styles.expenseDetailsContainer}>
                        <MaterialIcons name="group" size={24} color={Colors.light.tint} style={{ marginRight: 12 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.groupName}>{item.name}</Text>

                            {item.totals && (
                                <View style={styles.totalsContainer}>
                                    {Object.entries(item.totals).map(([currency, amount]) => (
                                        <Text
                                            key={currency}
                                            style={[
                                                styles.totalText,
                                                { color: amount < 0 ? Colors.light.error : Colors.light.success }
                                            ]}
                                        >
                                            {currency}: {amount}
                                        </Text>
                                    ))}
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
};

export default GroupList;