const Loading = () => {
  return (
    <div className="w-full gap-x-2 flex justify-center items-center">
      <div className="size-4 bg-primary/20 rounded-sm animate-pulse" />
      <div className="size-4 bg-primary/40 rounded-sm animate-pulse" />
      <div className="size-4 bg-primary/60 rounded-sm animate-pulse" />
      <div className="size-4 bg-primary/80 rounded-sm animate-pulse" />
      <div className="size-4 bg-primary rounded-sm animate-pulse" />
    </div>
  );
};

export default Loading;
