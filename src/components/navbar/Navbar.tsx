import Link from "next/link";

const NavbarLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <Link href={href}>{children}</Link>;
};

const Navbar = () => {
  return (
    <nav className=" fixed  py-4 px-4 m-4 rounded-full bg-slate-500">
      <div className="flex justify-between">
        <div className="flex">
          {/* <NavbarLink href="/">STYLON</NavbarLink> */}
        </div>
        <div className="flex gap-5">
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
