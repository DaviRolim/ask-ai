import { FormControl, FormLabel, FormErrorMessage, Input, Select, Textarea } from "@chakra-ui/react";
import { useState } from "react";

function MyForm() {
  // Declare state variables
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [relationship, setRelationship] = useState("");

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console log all the values
    console.log(age, gender, hobbies, relationship)

  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="gender">Gender</FormLabel>
        <Select
          id="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="age">Age</FormLabel>
        <Input
          id="age"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="hobbies">Hobbies</FormLabel>
        <Textarea
          id="hobbies"
          value={hobbies}
          onChange={(event) => setHobbies(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="relationship">Relationship</FormLabel>
        <Input
          id="relationship"
          value={relationship}
          onChange={(event) => setRelationship(event.target.value)}
        />
      </FormControl>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
