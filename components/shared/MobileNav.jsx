import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import NavItems from './NavItems';

const MobileNav = () => {
  return (
    <>
      <nav>
        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/menu.svg"
              width={20}
              height={20}
              alt="menu"
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="flex items-center justify-center ">
                <NavItems clsn="flex flex-col " />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default MobileNav;
