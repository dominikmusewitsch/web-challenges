import { Image } from "./Image.jsx";
import logo from "../img/logo.jpg";

export function Logo({ href }) {
  return (
    <a href={href}>
      <Image src={logo} alt="logo" />
    </a>
  );
}
