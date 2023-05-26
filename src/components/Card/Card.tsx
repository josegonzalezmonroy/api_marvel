import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { Data } from "../../types";
import "./Card.css";

interface Props {
  valores: Array<Data>;
}

const CharactersCard = ({ valores }: Props) => {
  return (
    <div className="CharactersCard">
      {valores.map((valor) => {
        return (
          <Card key={valor.id} colorScheme="blue" className="card" maxW="sm">
            <CardBody>
              <Image
                src={`${valor.thumbnail.path}.${valor.thumbnail.extension}`}
                alt={`Image of ${valor.name}`}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{valor.name}</Heading>
                <Text as="em">
                  {valor.description === ""
                    ? "Without description"
                    : valor.description}
                </Text>
                <Text className="comics" as="samp">
                  Comics appearances:
                  <p className="valor">{valor.comics.available}</p>
                </Text>
                <Text className="series" as="samp">
                  Series appearances:{" "}
                  <p className="valor">{valor.series.available}</p>
                </Text>
                <Text className="stories" as="samp">
                  Appearances in stories:{" "}
                  <p className="valor">{valor.stories.available}</p>
                </Text>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default CharactersCard;
