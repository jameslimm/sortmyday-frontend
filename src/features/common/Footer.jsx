import ghIcon from "../../assets/github-mark.png";
const Footer = () => {
  return (
    <footer className=" fixed bottom-0 left-0 right-0 text-center bg-slate-50 border-t-2 text-sm p-2">
      <a href="http://www.github.com/jameslimm" className="flex justify-center items-center gap-2">
        <img src={ghIcon} className="w-7 h-auto" />
        <p className="font-extralight text-xl">http://www.github.com/jameslimm</p>
      </a>
    </footer>
  );
};

export default Footer;
