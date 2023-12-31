import { Pressable, StyleSheet, Text, View } from "react-native";

function SectionHeader({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={() => { }}>
                <Text style={styles.link}>Ver Tudo</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    link: {
        marginTop: 10,
        textAlign: "center",
        color: "#FFA959"
    },
})

export default SectionHeader;