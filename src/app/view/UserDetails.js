import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../shared/Header";
import Post from "../components/Post";
import Album from "../components/Album";
import Modal from "../shared/Modal";
import TodoList from "../../app/components/TodoList";
import CompanyIcon from "../../../assets/Company.png";
import EmailIcon from "../../../assets/Email.png";
import PhoneIcon from "../../../assets/Phone.png";
import MoreIcon from "../../../assets/More.png";
import { fetchAPI, orderTodos } from "../utils/helpers";
import MapView, { Marker } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";
import AlbumDetails from "../shared/AlbumDetails";

const UserDetails = ({ route, navigation }) => {
  const { id, user } = route.params;
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // todo : add loader
  const [isError, setIsError] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(null);
  const [isAlbumDetails, setIsAlbumDetails] = useState(false);

  const currentUserLocation = {
    latitude: parseFloat(user.address.geo.lat),
    longitude: parseFloat(user.address.geo.lng),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    const randomAlbumIds = [];
    setIsLoading(true);
    for (let i = 0; i < 15; i++) {
      randomAlbumIds.push(Math.floor(Math.random() * 6) + 1);
    }

    Promise.all([
      fetchAPI(`/users/${id}/todos`),
      fetchAPI(`/users/${id}/posts`),
      fetchAPI("/photos"),
    ])
      .then(([resTodos, resPosts, resAlbums]) => {
        orderTodos(resTodos.slice(0, 3), setTodos);
        setPosts(resPosts.slice(0, 4));
        setAlbums(
          resAlbums.filter((album) => randomAlbumIds.includes(album.id))
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const setTodoOnData = (newTodo) => {
    if (!newTodo) {
      setIsError(true);
      return;
    }
    const newTodos = [{ title: newTodo }, ...todos];
    orderTodos(newTodos, setTodos);
    setIsTodoModalOpen(false);
  };

  const cleanStates = () => {
    setIsTodoModalOpen(false);
    setIsError(false);
  };

  return isAlbumDetails ? (
    <View style={styles.albumContainer}>
      <AlbumDetails
        setIsAlbumDetails={setIsAlbumDetails}
        albums={albums}
        albumIndex={albumIndex}
      />
    </View>
  ) : (
    <View
      style={styles.container}
      scrollEnabled={false}
      nestedScrollEnabled={false}
    >
      <ScrollView style={styles.scrollview}>
        {isTodoModalOpen && (
          <Modal
            title="Create a new Todo"
            action={(newTodo) => setTodoOnData(newTodo)}
            close={() => cleanStates()}
            placeholder="Enter your new todo"
            actionTitle="Validate"
            isError={isError}
          />
        )}

        <View style={styles.mapContainer}>
          <MapView
            style={[StyleSheet.absoluteFillObject]}
            initialRegion={currentUserLocation}
          >
            <Marker coordinate={currentUserLocation}>
              <Image
                source={require("../../../assets/pin.png")}
                style={{ height: 35, width: 35 }}
              />
            </Marker>
          </MapView>
        </View>
        <Header
          action={() => navigation.navigate("Home")}
          title="Back to home"
        />
        <View style={styles.userContainer}>
          <Text style={styles.name}>{user?.name}</Text>
          <View style={styles.wrapper}>
            <InformationRowIcon value={user?.company.name} icon={CompanyIcon} />
            <InformationRowIcon value={user?.email} icon={EmailIcon} />
            <InformationRowIcon value={user?.phone} icon={PhoneIcon} />
            <View style={styles.todoRow}>
              <Text style={styles.todoTitle}>To do list</Text>
              <TouchableOpacity
                onPress={() => setIsTodoModalOpen(true)}
                style={styles.moreIcon}
              >
                <Image style={styles.icon} source={MoreIcon} />
              </TouchableOpacity>
            </View>
            {todos && (
              <TodoList
                isTodoModalOpen={isTodoModalOpen}
                setIsTodoModalOpen={setIsTodoModalOpen}
                setTodos={setTodos}
                todos={todos}
              />
            )}
            <View style={styles.todoRow}>
              <Text style={styles.todoTitle}>Posts</Text>
            </View>
            {posts &&
              posts.map((post, i) => (
                <View style={styles.posts} key={i}>
                  <Post navigation={navigation} post={post} userId={id} />
                </View>
              ))}
            <View style={styles.todoRow}>
              <Text style={styles.todoTitle}>Albums</Text>
            </View>
            {albums &&
              albums.map((album, i) => (
                <TouchableOpacity
                  onPress={() => {
                    setAlbumIndex(i);
                    setIsAlbumDetails(true);
                  }}
                >
                  <View style={styles.posts} key={i}>
                    <Album album={album} />
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const InformationRowIcon = ({ value, icon }) => (
  <View style={styles.userInfoRow}>
    <Image style={styles.userInfoIcon} source={icon} />
    <Text style={styles.userInfo}>{value}</Text>
  </View>
);
export default UserDetails;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignContent: "center",
  },
  wrapper: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 16,
  },
  mapContainer: {
    width: "100%",
    height: 250,
    opacity: 0.9,
  },
  userContainer: {
    width: "100%",
    textAlign: "center",
  },
  name: {
    top: -40,
    alignContent: "center",
    position: "absolute",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    width: "100%",
  },
  userInfoRow: {
    width: "100%",
    height: 16,
    flexDirection: "row",
    maxHeight: 16,
    justifyContent: "center",
    marginBottom: 12,
  },
  userInfoIcon: {
    height: 16,
    width: 16,
    marginRight: 8,
  },
  icon: {
    height: 12,
    width: 12,
  },
  userInfo: {
    fontSize: 14,
    fontWeight: "bold",
    // fontFamily: "sans-serif",
  },
  posts: {
    width: "85%",
    alignContent: "center",
    marginBottom: 16,
  },
  post: {
    width: "100%",
  },
  todoRow: {
    width: "100%",
    paddingLeft: 35,
    paddingRight: 35,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  todoTitle: {
    // fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 24,
  },
  moreIcon: {
    maxWidth: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollview: {
    width: "100%",
    position: "relative",
  },
});
