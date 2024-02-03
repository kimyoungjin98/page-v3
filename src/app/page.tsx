import Button from "@/components/Button";

const index = () => {
  return (
    <article className="flex flex-col gap-6 w-full h-full justify-center items-center">
      <p className="font-extrabold text-center text-7xl text-gray-300 leading-tight">
        Front-End Developer <br />
        Kim YoungJin Portfolio Page
      </p>
      <p className="text-lg font-semibold text-gray-400">With Next.js</p>
      <div className="flex flex-col gap-6 items-center w-1/3">
        <Button expand>View Portfolio</Button>
        <Button expand variant="outline">
          View Introduction
        </Button>
      </div>
    </article>
  );
};

export default index;
