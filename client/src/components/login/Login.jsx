import { useState } from "react";
import {
  Flex,
  Avatar,
  Input,
  Link,
  Button,
  Box,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  HStack,
} from "@chakra-ui/react";
import styles from "./Login.module.css";
import LogoIcon from "../../assets/images/stockly logo.png";
import UserClient from "../../app/services/userService.js";

function Login() {
  const userClient = new UserClient();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputLoginEmailChange = (e) => setLoginEmail(e.target.value);
  const handleInputLoginPasswordChange = (e) =>
    setLoginPassword(e.target.value);
  const handleInputNameChange = (e) => setName(e.target.value);
  const handleInputLastNameChange = (e) => setLastName(e.target.value);
  const handleInputEmailChange = (e) => setEmail(e.target.value);
  const handleInputPasswordChange = (e) => setPassword(e.target.value);

  const handleLoginClick = () => {};
  const handleSingupClick = () => {
    userClient.constructor.postUser(name, lastName, email, password);
  };

  return (
    <div>
      <img className={styles.appLogo} src={LogoIcon} />
    </div>
    // <Flex
    //   width="100wh"
    //   height="100vh"
    //   backgroundColor="gray.200"
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <Stack
    //     justifyContent="center"
    //     alignItems="center">
    //     <Avatar src={LogoIcon} width="15rem" height="15rem" />
    //     <Tabs isFitted variant='enclosed'>
    //       <TabList mb='1em'>
    //         <Tab>Log In</Tab>
    //         <Tab>Sing Up</Tab>
    //       </TabList>
    //       <TabPanels>
    //         <TabPanel>
    //           <Box minW={{ base: "90%", md: "468px" }}>
    //             <Stack spacing={3}>
    //               <Input
    //                 variant='filled'
    //                 type="email"
    //                 value={loginEmail}
    //                 onChange={handleInputLoginEmailChange}
    //                 placeholder="email" />
    //               <Input
    //                 variant='filled'
    //                 type="password"
    //                 value={loginPassword}
    //                 onChange={handleInputLoginPasswordChange}
    //                 placeholder="Password" />
    //             </Stack>
    //             <Stack
    //               textAlign="right">
    //               <Link color={'teal.300'}>Forgot password?</Link>
    //             </Stack>
    //             <Button
    //               borderRadius={0}
    //               type="submit"
    //               colorScheme="teal"
    //               width="full"
    //               onClick={handleLoginClick}>
    //               Login
    //             </Button>
    //           </Box>
    //         </TabPanel>
    //         <TabPanel>
    //           <Flex
    //             backgroundColor="gray.200"
    //             justifyContent="center"
    //             alignItems="center">
    //             <Stack
    //               justifyContent="center"
    //               alignItems="center">
    //               <Box p={4}>
    //                 <Stack spacing={4}>
    //                   <HStack>
    //                     <Box>
    //                       <Input
    //                         variant='filled'
    //                         type="text"
    //                         value={name}
    //                         placeholder="First Name"
    //                         onChange={handleInputNameChange} />
    //                     </Box>
    //                     <Box>
    //                       <Input
    //                         variant='filled'
    //                         type="text"
    //                         value={lastName}
    //                         placeholder="List Name"
    //                         onChange={handleInputLastNameChange} />
    //                     </Box>
    //                   </HStack>
    //                   <Input
    //                     variant='filled'
    //                     type="email"
    //                     value={email}
    //                     placeholder="Email address"
    //                     onChange={handleInputEmailChange} />
    //                   <Input
    //                     variant='filled'
    //                     type="password"
    //                     value={password}
    //                     placeholder="Password"
    //                     onChange={handleInputPasswordChange} />
    //                   <Stack spacing={10} pt={2}>
    //                     <Button
    //                       borderRadius={0}
    //                       type="submit"
    //                       colorScheme="teal"
    //                       width="full"
    //                       onClick={handleSingupClick}>
    //                       Sign up
    //                     </Button>
    //                   </Stack>
    //                 </Stack>
    //               </Box>
    //             </Stack>
    //           </Flex>
    //         </TabPanel>
    //       </TabPanels>
    //     </Tabs>
    //   </Stack>
    // </Flex>
  );
}

export default Login;
