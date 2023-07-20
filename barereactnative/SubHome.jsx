import React from 'react';
import {
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    Button
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const ListItem = ({ title, description, onPress, imageUrl }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.listItem}>
            <View style={styles.imageContainer}>
                <Image style={styles.leftStyle} source={{ uri: imageUrl }} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.listItemTitle}>{title}</Text>
                <Text style={styles.listItemDescription}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const SubHome = () => {
    // const navigation = useNavigation();
    const [version, setVersion] = React.useState(0);

    function updateVersion() {
        setVersion((version) => version + 1);
    }
    const renderListItems = () => {
        return Array(50)
            .fill('')
            .map((_, idx) => (
                <ListItem
                    key={idx}
                    // onPress={() => navigation.navigate('NativePaperSubHome')}
                    title={Math.round(Math.random() * 100)}
                    description={`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}
                    imageUrl="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
            ));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.p}>
                <Button
                    onPress={updateVersion}
                    title="Re-Render"
                    color="#841584"
                />
            </View>
            <ScrollView>{renderListItems()}</ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 24,
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        marginBottom: 8,
        borderRadius: 8,
    },
    imageContainer: {
        width: '25%',
        height: '100%',
    },
    textContainer: {
        flex: 1,
        padding: 8,
    },
    listItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    listItemDescription: {
        fontSize: 14,
        color: 'gray',
    },
    leftStyle: {
        width: 90,
        height: 110,
        // resizeMode: 'cover',
    },
    p: {
        padding: 2
    }
});

export default SubHome;