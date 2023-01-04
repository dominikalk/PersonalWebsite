import Card from "components/common/Card";

type ContactCardProps = {
  onClose: () => void;
  className: string;
};

const ContactCard = ({ onClose, className }: ContactCardProps) => {
  return (
    <Card
      title="Contact Me"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <p className="text-2xl text-center my-20">Coming Soon ...</p>
    </Card>
  );
};

export default ContactCard;
