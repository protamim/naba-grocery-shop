import useProducts from "@/app/hooks/useProducts";
import DropDownSearchBar from "@/components/ui/DropDownSearchBar";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsPlus,
  BsTiktok,
  BsTwitterX,
} from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const SlideNav = ({toggle}) => {
  return (
    <>
      <div className={`bg-white px-4 space-y-5 pb-6 transition-all duration-300 w-full absolute top-full ${toggle ? 'left-0' : '-left-full'}`}>
        <DropDownSearchBar />
        <MenuItem />
        <ShopAddress />
      </div>
    </>
  );
};

export default SlideNav;

const NAVLINKS = [
  {
    title: "Home",
    routes: [
      { item: "Home 1", path: "/home-1" },
      { item: "Home 2", path: "/home-2" },
      { item: "Home 3", path: "/home-3" },
      { item: "Home 4", path: "/home-4" },
      { item: "Home 5", path: "/home-5" },
      { item: "Home 6", path: "/home-5" },
      { item: "Home 7", path: "/home-7" },
      { item: "Home 8", path: "/home-8" },
    ],
  },
  {
    title: "Pages",
    routes: [
      { item: "About US", path: "/about" },
      { item: "Team Archive", path: "/team-archive" },
      { item: "Team Single", path: "/team-single" },
      { item: "Daily Deals", path: "/daily-deals" },
      { item: "Special Offers", path: "/special-offers" },
      { item: "Faq Page", path: "/faq" },
      { item: "404 Page", path: "/404" },
    ],
  },
  {
    title: "Shop",
    routes: [
      { item: "Shop Layout", path: "/shop-layout" },
      { item: "Shop Ajax", path: "/shop-ajax" },
      { item: "Single Product", path: "/single-product" },
      { item: "Daily Deals", path: "/daily-deals" },
      { item: "Special Offers", path: "/special-offers" },
      { item: "Faq Page", path: "/faq" },
      { item: "404 Page", path: "/404" },
    ],
  },
];

const MenuItem = () => {
  return (
    <>
      <Accordion allowToggle>
        {NAVLINKS.map((item) => (
          <AccordionItem key={item.title}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "green" }}>
                    <Box as="span" flex="1" textAlign="left">
                      {item.title}
                    </Box>
                    {isExpanded ? (
                      <FiMinus fontSize="2rem" />
                    ) : (
                      <BsPlus fontSize="2rem" />
                    )}
                  </AccordionButton>
                </h2>
                <ul>
                  {item.routes.map((link) => (
                    <AccordionPanel key={link.item} py={2} px={0}>
                      <li className="pl-4">
                        <Link
                          className="relative block transition-all duration-300 hover:pl-3 hover:before:block before:hidden before:absolute before:bg-green-600 before:w-1 before:h-1 before:left-1 before:top-1/2 before:-translate-y-1/2"
                          href={link.path}
                        >
                          {link.item}
                        </Link>
                      </li>
                    </AccordionPanel>
                  ))}
                </ul>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

const ShopAddress = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-y-1">
        <span>{moment().format("DD.MM.YYYY")}</span>
        <h5>23/A Mark Street Road, Riyad City</h5>
        <Link href="tel:+971-50-1234567" className="transition-all duration-300 hover:text-green-500">+971-50-1234567</Link>
        <Link href="mailto:admin@nabaAI.com" className="transition-all duration-300 hover:text-green-500">admin@nabaAI.com</Link>
        <div className="flex gap-x-3 items-center mt-4">
          <Link href="#" className="transition-all duration-300 hover:text-green-500">
            <span>
              <BsFacebook />
            </span>
          </Link>
          <Link href="#" className="transition-all duration-300 hover:text-green-500">
            <span>
              <BsTwitterX />
            </span>
          </Link>
          <Link href="#" className="transition-all duration-300 hover:text-green-500">
            <span>
              <BsPinterest />
            </span>
          </Link>
          <Link href="#" className="transition-all duration-300 hover:text-green-500">
            <span>
              <BsInstagram />
            </span>
          </Link>
          <Link href="#" className="transition-all duration-300 hover:text-green-500">
            <span>
              <BsTiktok />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
