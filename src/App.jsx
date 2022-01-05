import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { UserCard } from "./components/oraganisms/user/UserCard";
import { SearchiInput } from "./molecules/SearchInput";
import "./styles.css";

const user = {
  name: "syota",
  image: "https://source.unsplash.com/LATYeZyw88c",
  email: "aaa@com",
  phone: "111-222-3333",
  company: {
    name: "testcampany"
  },
  website: "https://google.com"
};

export const App = () => {
  return (
    <div className="App">
      <PrimaryButton>Button</PrimaryButton>
      <SecondaryButton>ボタン</SecondaryButton>
      <br />
      <SearchiInput />
      <UserCard user={user} />
    </div>
  );
};
