const Card = ({ age, name, id, status, weight }) => {
  return (
    <div class="card">
      <div class="label">Age: {age}</div>

      <div class="label">ID: {id}</div>

      <div class="label">Name: {name}</div>

      <div class="label">Status: {status}</div>

      <div class="label">Weight: {weight}</div>
    </div>
  );
};

export default Card;
