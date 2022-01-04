import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { Input } from "../components/atoms/input/Input";

export const SearchiInput = () => {
  return (
    <div>
      <Input placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};
