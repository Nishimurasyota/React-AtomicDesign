import styled from "styled-components";
import { SearchInput } from "../../molecules/SearchInput";
import { UserCard } from "../oraganisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
//import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
//↑値と関数を参照する
import { UserState } from "../../store/UserState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `syota${val}`,
    image: `https://source.unsplash.com/LATYeZyw88c`,
    email: `aaa@com`,
    phone: `090-123-0987`,
    company: {
      name: `sharoughs`
    },
    website: `https://google.com`
  };
});

export const Users = () => {
  //  const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(UserState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>Usersページです</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUser>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUser>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUser = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
