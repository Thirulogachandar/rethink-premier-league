import { Box, Input, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../src/features/user";
import { useRouter } from "next/router";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box mx="auto">
      <Box w="40%">
        <Heading>Welcome back</Heading>
        <Input
          my={5}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="user name"
        />
        <Input
          my={5}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <Button
          onClick={() => {
            dispatch(login({ name: userName }));
            router.push("/");
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
