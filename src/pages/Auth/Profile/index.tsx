import React from "react";
import { Title } from "../../../components";
import { Col } from "../../../components/Grid";
import PageLogged from "../../../templates/PageLogged";

const Profile = () => {
  return (
    <PageLogged>
      <Col justifyContent="center">
        <Title>Profile</Title>
      </Col>
    </PageLogged>
  );
};

export default Profile;
