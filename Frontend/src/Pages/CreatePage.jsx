import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/Product";

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    imageURL: "",
  });

  const { createNewProduct } = useProductStore();
  const toast = useToast();

  const handleClick = async () => {
    const { success, product, message } = await createNewProduct(newProduct);

    toast({
      title: success ? "Success!" : "Error",
      description: success ? `Created: ${product.name}` : message,
      status: success ? "success" : "error",
      duration: 500,
      isClosable: true,
    });

    if (success) {
      setNewProduct({ name: "", price: "", imageURL: "" }); // reset form
    }
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} textAlign={"center"} fontSize={"3xl"} mb={5}>
          Create New Product
        </Heading>

        <Box
          width={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <Input
              placeholder="Product Price"
              value={newProduct.price}
              type="number"
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />

            <Input
              placeholder="Product Image URL"
              value={newProduct.imageURL}
              onChange={(e) => setNewProduct({ ...newProduct, imageURL: e.target.value })}
            />

            <Button width={"full"} colorScheme="blue" onClick={handleClick}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreatePage;
