import styled from "styled-components";

const Wrapper = styled.div``;

const WrapperSuccess = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: #5bb35b;
  padding: 0 15px;
`;

const WrapperFailure = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: red;
  padding: 0 15px;
`;

const OutcomeIcon = ({ success }) => {
  return (
    <Wrapper>
      {success === true && <WrapperSuccess>{"✔"}</WrapperSuccess>}
      {success === false && <WrapperFailure>{"✕"}</WrapperFailure>}
    </Wrapper>
  );
};

export default OutcomeIcon;
