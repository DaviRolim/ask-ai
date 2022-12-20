import {
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { trpc } from "../../../utils/trpc";

function TvShowSuggestionForm() {
  // Declare state variables
  const [moviesOrShows, setMoviesOrShows] = useState("");
  const [platforms, setPlatforms] = useState("");
  const mutation = trpc.tvshow.suggestion.useMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({
      moviesOrShows,
      consideredPlatforms: platforms,
    });
  };
  if (mutation.isLoading) {
    return <Spinner size={"xl"} color="white" />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel color={"white"} htmlFor="moviesOrShows">
          Filmes, series ou animes que voce gosta.
        </FormLabel>
        <Textarea
          id="moviesOrShows"
          color="white"
          value={moviesOrShows}
          onChange={(event) => setMoviesOrShows(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel color={"white"} htmlFor="platforms">
          Quais plataformas voce usa? (ex: Netflix, Prime video...)
        </FormLabel>
        <Textarea
          color="white"
          id="hobbies"
          value={platforms}
          onChange={(event) => setPlatforms(event.target.value)}
        />
      </FormControl>
      <Button type="submit" mt={3} w="100%">
        Gerar sugestões
      </Button>
      {mutation.data && (
        <p style={{ color: "white", marginTop: "20px", whiteSpace: "pre-wrap" }}>{mutation.data}</p>
      )}

      {mutation.error && (
        <p style={{ color: "white" }}>
          Something went wrong! {mutation.error.message}
        </p>
      )}
    </form>
  );
}

export default TvShowSuggestionForm;
