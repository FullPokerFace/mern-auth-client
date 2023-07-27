import { Button, Image } from "@fluentui/react-components";
import logo from "./logo.svg";

const Header = () => {
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  return (
    <nav className="p-4 flex justify-between">
      <section className="flex gap-2 items-center">
        <Image src={logo} className="w-10" />
        <span className="text-lg font-bold">Wolf Activity</span>
      </section>
      <section className="flex items-center">
        {localStorage?.getItem("token") && (
          <Button appearance="primary" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </section>
    </nav>
  );
};

export default Header;
