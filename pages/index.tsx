import { NextPage } from "next";

import { useGetCharactersQuery } from "@/generated/graphql";

const Home: NextPage = () => {
  const { loading, data } = useGetCharactersQuery();

  const characters = data?.characters?.results;

  return (
    <div>
      <main>
        {loading && <>loading...</>}

        {characters?.map((character, index) => {
          return (
            <p key={character?.id ?? index}>
              {character?.name ?? "No name: something is wrong"}
            </p>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
