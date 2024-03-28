import ActionsBar from "@/components/header/actions-bar";
import NavigationBar from "@/components/header/navigation-bar";

function Header() {
  return (
    <header>
      <ActionsBar
        price={Math.random() * 1000}
        change={Math.random()}
        dailyVolume={Math.random() * 10 ** 7}
        marketCap={Math.random() * 10 ** 10}
      />
      <NavigationBar />
    </header>
  );
}

export default Header;
