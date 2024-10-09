import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';

interface Group {
    id: number;
    name: string;
}

interface GroupListProps {
    groups: Group[]
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
    return(
        <FlatList
            data={groups}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=> (
                <TouchableOpacity style={styles.card}>
                    <Link  href={`/groupdetail/${item.id}`} style={styles.link}>
                        {item.name}
                    </Link>
                </TouchableOpacity>
            )}
            ItemSeparatorComponent={
                () => <View style={styles.separator} />
            }
        />
    );
};

export default GroupList;