import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      title: "What is Lorem Ipsum?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "Lorem Ipsum",
      authorImage: "https://i.pravatar.cc/100?img=1",
      date: "00/00/2023",
      readingTime: "5min",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      title: "Why do we use it?",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      author: "Lorem Ipsum",
      authorImage: "https://i.pravatar.cc/100?img=5",
      date: "00/00/2023",
      readingTime: "6min",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Where can I get some?",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
      author: "Lorem Ipsum",
      authorImage: "https://i.pravatar.cc/100?img=3",
      date: "00/00/2023",
      readingTime: "7min",
    },
  ];

  const [posts, setPosts] = useState(blogPosts);

  return (
    <ChakraProvider resetCSS>
      <Flex gap="1rem" align="start" justify="center" m="1rem">
        {posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
