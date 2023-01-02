import React from "react";
import Card from "components/common/Card";
import Image from "next/image";
import profilePic from "public/images/profile.jpeg";

type AboutMeCardProps = {
  onClose: () => void;
  className: string;
};

const AboutMeCard = ({ onClose, className }: AboutMeCardProps) => {
  return (
    <Card
      title="About Me"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <div className="flex items-center flex-col md:flex-row">
        <p className="w-full mb-4 md:w-2/5 md:mb-0  text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad facilis
          totam laudantium inventore velit. Qui, minus? Et, labore,
          necessitatibus quod debitis repudiandae quos veritatis dolores qui
          nostrum illum aperiam quas suscipit molestiae, tempora quae at facere?
          Asperiores eum quas dolore ipsum suscipit delectus, vitae sint,
          doloribus aspernatur quod, magnam quo!
        </p>
        <Image
          src={profilePic}
          alt="Profile"
          className="rounded-lg w-full md:w-2/5 h-full object-cover ml-auto"
        />
      </div>
    </Card>
  );
};

export default AboutMeCard;
