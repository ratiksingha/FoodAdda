

const Footer = () => {
  const devloperName = "Ratik Singh";

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4 z-50">
      <div className="container mx-auto flex flex-col items-center gap-2">
        <span className="text-xs mt-1">
          &copy; {new Date().getFullYear()} {devloperName}. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;