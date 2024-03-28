import FullLogoSVG from "@/assets/svg/full-logo.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative w-full">
      <Image
        className="pointer-events-none"
        src="/footer-bg.png"
        alt="colors mix"
        layout="fill"
        quality={100}
      />
      <main className="w-full h-full px-20 py-16 space-y-16">
        <FullLogoSVG height={70} />
        <div className="w-full flex items-start justify-between">
          <div className="text-sm font-medium text-[#808080] max-w-sm">
            <p>
              τaostats is a Block Explorer and Analytics Platform for Bittensor,
              a decentralized machine learning network.
            </p>
            <br />
            <p>This site is not affiliated with the Opentensor Foundation.</p>
            <br />
            <p>
              The content of this website is provided for information purposes
              only.
            </p>
            <br />
            <p>
              No claim is made as to the accuracy or currency of the content on
              this site at any time.
            </p>
            <br />
            <p>
              τaosτaτs is created and maintained by mogmachine. We hope you
              found it helpful, if you have any suggestions or issues please
              contact us at{" "}
              <Link
                href="mailto:taostats@mogmachine.com"
                target="_blank"
                className="underline"
              >
                taostats@mogmachine.com.
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-28">
            <div className="space-y-7 row-span-2">
              <h6 className="text-base font-medium text-white">Blockchain</h6>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Blocks
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Transfers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Delegation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Validators
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Accounts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Subnets
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Nakamoto
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Kusanagi
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-7">
              <h6 className="text-base font-medium text-white">Validators</h6>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Verified Validators
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Delegation/Staking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-7">
              <h6 className="text-base font-medium text-white">Resources</h6>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Links
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Media
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-7">
              <h6 className="text-base font-medium text-white">Developers</h6>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Corcel API
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Taostats API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-7">
              <h6 className="text-base font-medium text-white">Apps</h6>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Corcel Chat
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Corcel Translate
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#ABABAB] hover:underline"
                  >
                    Corcel Mobile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="text-sm font-medium flex items-center justify-between gap-x-36">
          <p className="text-[#808080] whitespace-nowrap">
            Taostats ©{new Date().getFullYear()}
          </p>
          <p className="text-white">
            Taostats is funded by public delegation. Support us by{" "}
            <Link
              href="https://delegate.taostats.io/staking?hkey=5Hddm3iBFD2GLT5ik7LZnT3XJUnRnN8PoeCFgGQgawUVKNm8"
              target="_blank"
              className="underline"
            >
              delegating stake to the taostats.io validator
            </Link>
          </p>
        </span>
      </main>
    </footer>
  );
}

export default Footer;
