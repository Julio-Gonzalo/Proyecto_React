export function Gallery({ data }) {
  return (
    <>
      {data.map((character, index) => (
        <div key={index}>
          <img
            src={`http://localhost:3000/${character.image}`}
            alt={character.name}
          />
        </div>
      ))}
    </>
  );
}
