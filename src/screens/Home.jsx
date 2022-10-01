import styled from "styled-components";
import FileUpload from "../components/FileUpload";
import listSvg from "../assets/list.svg";
import RoundButton from "../components/RoundButton";

import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Home = () => {
  const navigate = useNavigate();

  const navigateToList = () => {
    navigate("/list");
  };

  return (
    <Wrapper>
      <FileUpload />
      <RoundButton icon={listSvg} onClick={navigateToList} />
    </Wrapper>
  );
};

export default Home;
