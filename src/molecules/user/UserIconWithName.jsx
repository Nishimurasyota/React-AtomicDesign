import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SIcon>
      <SImage height={130} height={100} src={image} alt={name} />
      <SName>{name}</SName>
    </SIcon>
  );
};

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
