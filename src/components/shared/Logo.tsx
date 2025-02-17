import Image from "next/image";
import image from "@/assets/logo.png";
const Logo = () => {
  return (
    <div>
      <Image width={200} height={200} src={image} alt="Logo" />
    </div>
  );
};

export default Logo;
