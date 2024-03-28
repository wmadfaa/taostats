import classNames from "classnames";

import Image from "next/image";
import Link from "next/link";

import * as num from "@/utils/numbers";

import * as LucideIcon from "@/components/lucide-icon";
import Button from "@/components/button";

import CorcelLogoSVG from "@/assets/svg/corcel-logo.svg";

export interface ActionsBarProps {
  price: number;
  change: number;
  marketCap: number;
  dailyVolume: number;
}

function ActionsBar(props: ActionsBarProps) {
  return (
    <section className="w-full h-12 px-8 flex items-center gap-8 bg-black border-b border-[#363636]">
      <dl className="flex items-center gap-3 text-white">
        <div className="flex items-center gap-3">
          <dt>
            <Image
              className="aspect-square"
              width={12}
              height={12}
              src="/tao.png"
              alt="Bittensor price (τao)"
            />
          </dt>
          <dd className="font-medium">{num.format_currency(props.price)}</dd>
        </div>
        <div
          className={classNames(
            "flex items-center gap-2",
            props.change === 0
              ? "text-[#909090]"
              : props.change < 0
                ? "text-[#C83232]"
                : "text-[#95EE5F]",
          )}
        >
          <dt>
            {props.change > 0 ? (
              <LucideIcon.Accessible
                fill="currentColor"
                stroke="black"
                name="square-chevron-up"
                label="(τao) price incressed"
              />
            ) : (
              <LucideIcon.Accessible
                fill="currentColor"
                name="square-chevron-down"
                label="(τao) price decressed"
              />
            )}
          </dt>
          <dd className="font-normal text-sm">
            {num.format_percent(props.change)}
          </dd>
        </div>
      </dl>
      <dl className="flex items-center gap-5 text-white">
        <div className="flex items-center gap-x-3.5">
          <dt className="text-[#909090]">Market Cap</dt>
          <dd>{num.format_currency(props.marketCap)}</dd>
        </div>
        <div className="flex items-center gap-x-3.5">
          <dt className="text-[#909090]">24hr Volume</dt>
          <dd>{num.format_currency(props.dailyVolume)}</dd>
        </div>
      </dl>
      <div className="grow flex items-center justify-end gap-x-2.5">
        <Button asChild iconLeft={<CorcelLogoSVG width={17} />}>
          <Link href="https://corcel.io/" target="_blank">
            Visit Corcel.io
          </Link>
        </Button>
        <Button iconLeft={<LucideIcon.Dynamic name="dollar-sign" size={17} />}>
          Buy
        </Button>
        <Button
          variant="secondary"
          iconLeft={<LucideIcon.Dynamic name="eclipse" size={17} />}
        >
          Stake
        </Button>
      </div>
    </section>
  );
}

export default ActionsBar;
