import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchiInput } from "./molecules/SearchInput";
import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <PrimaryButton>Button</PrimaryButton>
      <SecondaryButton>ボタン</SecondaryButton>
      <br />
      <SearchiInput />
    </div>
  );
};
