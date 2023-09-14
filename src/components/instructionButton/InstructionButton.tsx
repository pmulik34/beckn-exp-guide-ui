import { Button } from "antd";
import { FC } from "react";
import "./InstructionButton.css";

interface InstructionButtonProps {
  handleInstructions: () => void;
}

const InstructionButton: FC<InstructionButtonProps> = (props) => {
  return (
    <div>
      <Button
        className="instructionButton"
        type="primary"
        onClick={props.handleInstructions}
      >
        instructions
        <img style={{ paddingLeft: "5px" }} src="/assets/arrow_back.svg" />
      </Button>
    </div>
  );
};

export default InstructionButton;
