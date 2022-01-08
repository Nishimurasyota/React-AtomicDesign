import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { UserState } from "../../store/UserState";
//↑関数のみ参照する

export const Top = () => {
  //  const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(UserState);
  const history = useHistory();

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickUser = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickUser}>一般</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
