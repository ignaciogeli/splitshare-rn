import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';

interface Group {
    id: number;
    name: string;
    totals: Record<string, number> | null;
}

interface GroupListProps {
    groups: Group[]
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
    return (
        <FlatList
            data={groups}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.card}>
                    {/* Usar View para contener el texto y el Link sólo para la navegación */}
                    <View style={styles.expenseDetailsContainer}>
                        <Text style={styles.groupName}>{item.name}</Text>

                        {item.totals && (
                            <View style={styles.totalsContainer}>
                                {Object.entries(item.totals).map(([currency, amount]) => (
                                    <Text
                                        key={currency}
                                        style={[
                                            styles.totalText,
                                            { color: amount < 0 ? 'red' : 'green' }  // Cambiar color según el monto
                                        ]}
                                    >
                                        {currency}: {amount}
                                    </Text>
                                ))}
                            </View>
                        )}
                    </View>

                    {/* Link solo rodea la navegación */}
                    <Link href={`/groupdetail/${item.id}`} style={styles.link}>
                        View Details
                    </Link>
                </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
};

export default GroupList;