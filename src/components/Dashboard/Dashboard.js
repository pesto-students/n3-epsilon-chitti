import Card from "./Card/Card";
import { getCardsData } from "../../helpers/cardsFetcher";

const HomePage = () => {
  const cards = getCardsData();

  return (
    <>
      {cards?.map((card) => (
        <Card key={card.id} title={card.title} subtitle={card.total} />
      ))}
    </>
  );
};

export default HomePage;
