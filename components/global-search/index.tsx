import * as Portal from "@radix-ui/react-portal";

import Button from "@/components/button";
import * as LucideIcon from "@/components/lucide-icon";

interface GlobalSearchProps {}

function GlobalSearch(props: GlobalSearchProps) {
  return (
    <>
      <Button
        iconLeft={
          <LucideIcon.Accessible size={20} name="search" label="search" />
        }
        variant="tertiary"
        className="!font-normal gap-x-6"
      >
        Search by Address, Validator or Txn Hash
      </Button>
      <Portal.Root>Content</Portal.Root>
    </>
  );
}

export default GlobalSearch;
