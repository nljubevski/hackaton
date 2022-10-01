import styled from "styled-components";
import Ripples from "react-ripples";
import { useNavigate } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

import { getImageUrl } from "../utils";

import Spinner from "./Spinner";
import OutcomeIcon from "./OutcomeIcon";

const OuterWrapper = styled.div`
  padding: 5px 3px;
  margin: 10px 6px;
`;

const Wrapper = styled.div`
  height: 200px;
  width: 180px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 15px;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  margin-top: 10px;
`;

const Footer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
`;

const ImageListItem = ({ data }) => {
  const setCurrentItem = useStoreActions(
    (actions) => actions.tasks.setCurrentItem
  );
  const navigate = useNavigate();
  const imageSrc = getImageUrl(data);
  const stillProcessing = data.outcome === null;

  const goToDetails = () => {
    setTimeout(() => {
      setCurrentItem(data);
      if (!stillProcessing) {
        navigate("/details");
      }
    }, 500);
  };

  return (
    <Ripples onClick={goToDetails}>
      <OuterWrapper>
        <Wrapper>
          <ImgWrapper>
            <img
              src={imageSrc}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "10px",
              }}
            />
          </ImgWrapper>

          <Footer>
            {stillProcessing && <Spinner />}
            {!stillProcessing && <OutcomeIcon success={data.outcome} />}
          </Footer>
        </Wrapper>
      </OuterWrapper>
    </Ripples>
  );
};

export default ImageListItem;
