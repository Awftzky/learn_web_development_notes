type ProfileCardProps = {
  name: string;
  birthYear: number;
  job?: string;
};

const ProfileCard = (props: ProfileCardProps) => {
  const { name = "Unknown", birthYear, job } = props;

  return (
    <div style={{ border: "1px solid red" }}>
      <h2>Name: {name}</h2>
      <p>Birth Year: {birthYear}</p>

      {/* TERNARY OPEATOR */}
      {props.job ? <p>Job : {job}</p> : <p>Job : Unemployment</p>}
    </div>
  );
};

export default ProfileCard;
