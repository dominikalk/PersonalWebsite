import Card from "components/common/Card";

type VirusCardProps = {
  onClose: () => void;
  className: string;
};

const VirusCard = ({ onClose, className }: VirusCardProps) => {
  return (
    <Card
      title="You have a virus!!!"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <p>
        Your computer has been locked and encrypted! To unlock it and get all
        your data back hire Dominik. (Or find the antivirus software).
      </p>
    </Card>
  );
};

export default VirusCard;
