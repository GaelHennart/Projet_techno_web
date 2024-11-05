import Link from 'next/link';

interface NavbarItemProps {
  title: string;
  link: string;
}

const NavbarItem = ({ title, link }: NavbarItemProps) => {
    return (
      <li className="text-[#3a86ff] font-montserrat font-semibold flex">
        <Link href={link} className="border-2 border-[#3a86ff] rounded-full text-center py-1 w-[150px] 
                                    hover:bg-[#3a86ff] hover:text-[#F5F5F5] shadow-lg transition-transform duration-300 ease-in-out  hover:shadow-xl hover:scale-110">
          {title}
        </Link>
      </li>
    );
};

export default NavbarItem;
