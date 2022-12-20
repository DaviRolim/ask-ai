import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { trpc } from "../../../utils/trpc";

function GiftForm() {
  // Declare state variables
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [relationship, setRelationship] = useState("");
  const mutation = trpc.gift.suggestion.useMutation();

  // Handle form submission
  // TODO move this to GiftSuggestionPanel (create it first)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({
      age,
      gender,
      hobbies,
      relationship,
    });
  };
  if (mutation.isLoading) {
    return <Spinner size={"xl"} color="white" />
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel color={"white"}  htmlFor="gender">Genero</FormLabel>
        <Select
          id="gender"
          color="white"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option style={{"color": "white"}} value="">Selecione o genero</option>
          <option style={{"color": "white"}} value="homem">Homem</option>
          <option style={{"color": "white"}} value="mulher">Mulher</option>
          <option style={{"color": "white"}} value="other">Outro</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel color={"white"} htmlFor="age">Idade</FormLabel>
        <Input
          id="age"
          color="white"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel color={"white"} htmlFor="hobbies">Do que a pessoa gosta?</FormLabel>
        <Textarea
          color="white"
          id="hobbies"
          value={hobbies}
          onChange={(event) => setHobbies(event.target.value)}
        />
      </FormControl>
      {/* <FormControl>
        <FormLabel color={"white"}  htmlFor="relationship">Relationship</FormLabel>
        <Input
          id="relationship"
          value={relationship}
          onChange={(event) => setRelationship(event.target.value)}
        />
      </FormControl> */}
      <Button type="submit" mt={3} w="100%">Gerar sugestões</Button>
      {mutation.data && <p style={{"color": "white", "marginTop": "20px"}}>{mutation.data}</p>}

      {mutation.error && <p style={{"color": "white"}}>Something went wrong! {mutation.error.message}</p>}
    </form>
  );
}

export default GiftForm;
