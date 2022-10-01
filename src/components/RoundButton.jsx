import Ripples from "react-ripples";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 86px;
  padding: 28px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: inline-flex;
  overflow: hidden;
  background-color: lightgreen;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.15);
`;

const RoundButton = (props) => {
  return (
    <Wrapper>
      <Ripples>
        <Button {...props}>
          {props.children}
          <img src={props.icon} />
        </Button>
      </Ripples>
    </Wrapper>
  );
};

export default RoundButton;
