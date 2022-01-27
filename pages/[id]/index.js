import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
const axios = require("axios").default;
import Link from "next/link";
// grabbing data from URL
import { useRouter } from "next/router";
const EachHero = ({ heros }) => {
  const router = useRouter();
  const heroID = router.query.id;
  const delHero = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h1 className="display-3">Identity of Hero</h1>
      <MDBCard style={{ maxWidth: "22rem" }} className="border border-2 my-2">
        <MDBCardBody>
          <MDBCardTitle>{heros.superHero}</MDBCardTitle>
          <MDBCardText>{heros.realName}</MDBCardText>
          <MDBBtn className="btn btn-danger">Delete Hero</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  const { hero } = res.data;
  console.log(hero);
  return {
    props: { heros: hero },
  };
}
export default EachHero;
