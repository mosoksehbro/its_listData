import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchData } from "../utils/api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
type RootStackParamList = {
  Detail: { id: number };
};

type DetailDataProps = NativeStackScreenProps<RootStackParamList, "Detail">;

const DetailData: React.FC<DetailDataProps> = ({ route }) => {
  const { id } = route.params;
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(`Fetching data for ID: ${id}`);
        const response = await fetchData(`/posts/${id}`);
        setData(response);
        if (!response || Object.keys(response).length === 0) {
          setError("Data not found");
        } else {
          setData(response);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Detail Data" />
      <Text style={styles.title}>Title: {data?.title}</Text>
      <Text style={styles.body}>Body: {data?.body}</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  body: {
    fontSize: 16,
    color: "#555",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailData;
