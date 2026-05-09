import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useGastos } from "@/src/context/GastosContext";

export default function Index() {
  const router = useRouter();
  const { gastos, remover } = useGastos();

  const total = gastos.reduce((acc, item) => acc + item.valor, 0);

  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total gasto:</Text>
        <Text style={styles.total}>R$ {total.toFixed(2)}</Text>
      </View>

      {gastos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum gasto registrado</Text>
          <Text style={styles.emptySubtext}>Comece adicionando um novo gasto 👇</Text>
        </View>
      ) : (
        <FlatList
          data={gastos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemContent}>
                <Text style={styles.desc}>{item.descricao}</Text>
                <Text style={styles.valor}>R$ {item.valor.toFixed(2)}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => remover(item.id)}
              >
                <Text style={styles.delete}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/formulario")}
      >
        <Text style={styles.buttonText}>+ Novo gasto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  totalContainer: {
    backgroundColor: "#1976d2",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
  total: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#999",
  },
  emptySubtext: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#1976d2",
  },
  itemContent: {
    flex: 1,
  },
  desc: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  valor: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  deleteButton: {
    padding: 8,
  },
  delete: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#1976d2",
    padding: 15,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
