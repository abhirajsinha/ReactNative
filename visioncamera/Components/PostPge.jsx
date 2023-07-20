import "./styles.css";
import {
  NativeBaseProvider,
  Box,
  Image,
  Text,
  Link,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Code,
  Button,
  Pressable
} from "native-base";
import theme, { ITheme } from "./theme";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bgColor="black">
        <HStack bgColor="black" flex={1}>
          <Box flex={1} flexDirection="row" padding={2} alignItems="center">
            <Image
              h={10}
              w={10}
              bgColor="red.100"
              borderRadius={145}
              source={{
                uri:
                  "https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-21.png"
              }}
            />
            <Text color="white" marginLeft={1}>
              Add Photo
            </Text>
          </Box>
          <Box>
            <Image
              height={10}
              width={8}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/7599/7599965.png"
              }}
            />
          </Box>
        </HStack>
        <Box bgColor="black" h={1000} p={2} mt={350}>
          <Button
            variant="outline"
            borderColor="white"
            bgColor="black"
            h="48px"
            w="333px"
            left={6}
            borderRadius="12px"
          >
            <Text fontSize="18" color="white">
              Retake Photo
            </Text>
          </Button>
          <Button
            variant="solid"
            borderColor="white"
            bgColor="white"
            h="48px"
            w="333px"
            left={6}
            borderRadius="12px"
            mt={5}
          >
            <Text fontSize="18">Proceed</Text>
          </Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
