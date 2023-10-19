export function Gallery({ data }) {
  return (
    <>
      {data.map((character, index) => (
        <article className="section-article" key={index}>
          <img
            src={`http://localhost:3000/${character.image}`}
            alt={character.name}
          />
        </article>
      ))}
    </>
  );
}
