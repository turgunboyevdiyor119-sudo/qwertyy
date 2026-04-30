function User(props) {
  return (
    <div>
      {props.odam.map((item, index) => (
        <div key={index} style={{ border: '1px solid black', margin: '10px' }}>
          <h3>Ism: {item.ism}</h3>
          <p>ish: {item.Familiya}</p>
        </div>
      ))}
    </div>
  );
}

export default User;
function User2(props) {
  return (
    <div>
      {props.odam.map((item, index) => (
        <div key={index} style={{ border: '1px solid black', margin: '10px' }}>
          <h3>Ism: {item.ism}</h3>
          <p>ish: {item.Familiya}</p>
        </div>
      ))}
    </div>
  );
}