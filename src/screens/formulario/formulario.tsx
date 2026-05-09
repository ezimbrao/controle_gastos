import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useGastos } from "@/src/context/GastosContext";

export const Formulario = () => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState("");

  const router = useRouter();
  const { adicionar } = useGastos();

  function validarDados() {
    setErro("");

    if (!descricao.trim()) {
      setErro("A descrição não pode estar vazia");
      return false;
    }

    const valorNumerico = parseFloat(valor);
    if (!valor || isNaN(valorNumerico) || valorNumerico <= 0) {
      setErro("O valor deve ser maior que zero");
      return false;
    }

    return true;
  }

  function salvarGasto() {
    if (!validarDados()) {
      return;
    }

    const novoGasto = {
      id: Date.now().toString(),
      descricao: descricao.trim(),
      valor: parseFloat(valor),
    };

    adicionar(novoGasto);
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição do gasto</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Almoço, transporte..."
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text style={styles.label}>Valor (R$)</Text>
      <TextInput
        style={styles.input}
        placeholder="0.00"
        value={valor}
        onChangeText={setValor}
        keyboardType="decimal-pad"
      />

      {erro && <Text style={styles.erro}>{erro}</Text>}

      <TouchableOpacity style={styles.button} onPress={salvarGasto}>
        <Text style={styles.buttonText}>💾 Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonCancel}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonCancelText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  erro: {
    color: "#d32f2f",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ffebee",
    borderRadius: 6,
    fontSize: 14,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#1976d2",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonCancel: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonCancelText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
});
