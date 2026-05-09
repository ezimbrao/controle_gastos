import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Collapsible({ title, children }: { title: string; children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.title}>{title}</Text>
        <Text>{isOpen ? '−' : '+'}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  content: { paddingVertical: 12, paddingHorizontal: 16 },
});
