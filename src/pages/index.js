import { Card } from "@/components/Card";
import Head from "next/head";
import podengo from "@/../public/img/podengo.jpg";
import bengal from "@/../public/img/bengal.jpg";
import jay from "@/../public/img/jay.jpg";

const data = [
  {
    caption: "The most beautiful dog",
    id: 1,
    img: {
      path: podengo,
      alt: "Picture of a Podengo dog.",
    },
    link: "/",
    preTitle: "2023-03-27",
    title: "Podengo",
  },
  {
    caption: "A beautiful cat",
    id: 2,
    img: {
      path: bengal,
      alt: "Picture of a Bengal cat.",
    },
    link: "/",
    preTitle: "2023-03-28",
    title: "Bengal",
  },
  {
    caption:
      "The most agressive sound? The most agressive sound? The most agressive sound? The most agressive sound?",
    id: 3,
    img: {
      path: jay,
      alt: "Picture of a Jay bird.",
    },
    link: "/",
    preTitle: "2023-03-29",
    title: "Jay",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Accessible card</title>
        <meta name="description" content="Accessible card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <h1 className="mb-8 text-2xl font-bold">Accessible card</h1>
        <ul className="flex flex-col gap-8 md:grid-cols-2 lg:grid-cols-3 [@supports(display:grid)]:grid">
          {data.map((item) => (
            <Card
              key={item.id}
              caption={item.caption}
              img={item.img}
              link={item.link}
              preTitle={item.preTitle}
              title={item.title}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
