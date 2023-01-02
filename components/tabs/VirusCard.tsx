import React from "react";
import Card from "components/common/Card";
import Image from "next/image";
import profilePic from "public/images/profile.jpeg";

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
      <p className="text-white">
        Your computer has been locked and encrypted! To unlock it and get all
        your data back hire Dominik.
      </p>
    </Card>
  );
};

export default VirusCard;
