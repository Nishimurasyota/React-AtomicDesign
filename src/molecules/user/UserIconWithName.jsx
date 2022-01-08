import { memo, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { UserState } from "../../store/UserState";
//↑値のみを参照する

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name } = props;
  //  const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(UserState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SIcon>
      <SImage height={130} height={100} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SIcon>
  );
});

const SIcon = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #000;
  cursor: pointer;
`;
