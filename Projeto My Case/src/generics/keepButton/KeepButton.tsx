import { Button } from "./KeepButtonBase";

type Props = {
  click: () => void;
};

function KeepButton(props: Props) {
  const { click } = props;
  return <Button onClick={() => click()}>Keep</Button>;
}

export default KeepButton;
