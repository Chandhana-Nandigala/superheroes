import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
const axios = require("axios").default;
import Link from "next/link";

const index = ({ heros }) => {
  return (
    <div className="container">
      <h1 className="display-2">SuperHero Identity Manager</h1>
      <div>
        {heros.map((hero) => (
          <MDBCard
            style={{ maxWidth: "22rem" }}
            className="border border-2 my-2"
          >
            <MDBCardBody>
              <MDBCardTitle>{hero.superHero}</MDBCardTitle>
              <MDBCardText>Reveal Identity</MDBCardText>
              <Link href={`/`}>
                <MDBBtn>View Hero</MDBBtn>
              </Link>
              <Link href={`/`}>
                <MDBBtn className="mx-2">Edit Hero</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await axios("http://localhost:3000/api/hero");
  const { hero } = res.data;
  console.log(hero);
  return {
    props: { heros: hero },
  };
}
export default index;
