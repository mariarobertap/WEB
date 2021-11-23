import { Button } from "./SellButtonBase";

type Props = {
  click: () => void;
};

function SellButton(props: Props) {
  const { click } = props;
  return <Button onClick={() => click()}>Sell</Button>;
}

export default SellButton;
