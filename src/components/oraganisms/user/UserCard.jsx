import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;

  return (
    <div>
      <img height={160} src={user.image} alt="プロフィール" />
      <p>{user.name}</p>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom:0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom 8px;

  }
`;
