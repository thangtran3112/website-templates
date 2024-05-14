import { Parallax } from "react-parallax";

export const About = () => {
  return (
    <Parallax
      blur={3}
      bgImage="./img/parallax.jpg"
      bgImageAlt="the cat"
      strength={200}
    >
      <section
        className="relative py-10 after:absolute after:inset-0 after:h-full after:w-full after:bg-black/40"
        id="about"
      >
        <h1 className="relative z-[1] text-center font-lobster text-4xl text-primary-300">
          About us
        </h1>
        <div className="container relative z-[1] mx-auto flex flex-wrap px-4 py-5 xs:px-8">
          <p className="my-2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eligendi, qui hic sequi suscipit voluptate itaque libero. Molestiae
            quis libero odio doloribus animi placeat et architecto, amet nam
            aspernatur consequuntur? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus, in dolor hic animi molestias
            quaerat laboriosam possimus officia iure laudantium, mollitia libero
            quis laborum dolores repellat dignissimos velit impedit similique.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, quia laudantium quo quasi vitae consequatur maiores,
            fuga harum iure sunt praesentium similique alias reiciendis ea quae
            numquam amet possimus. Assumenda.
          </p>
          <p className="my-2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eligendi, qui hic sequi suscipit voluptate itaque libero. Molestiae
            quis libero odio doloribus animi placeat et architecto, amet nam
            aspernatur consequuntur? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus, in dolor hic animi molestias
            quaerat laboriosam possimus officia iure laudantium, mollitia libero
            quis laborum dolores repellat dignissimos velit impedit similique.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, quia laudantium quo quasi vitae consequatur maiores,
            fuga harum iure sunt praesentium similique alias reiciendis ea quae
            numquam amet possimus. Assumenda.
          </p>
        </div>
      </section>
    </Parallax>
  );
};
