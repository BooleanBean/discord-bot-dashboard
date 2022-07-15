type Props = Record<string, unknown>;

const BckHeader: React.FC<Props> = () => {
  return (
    <div className="bg-black bg-opacity-40 backdrop-blur-lg backdrop-filter">
      <div className="container mx-auto flex h-16 items-center px-2">
        header
      </div>
    </div>
  );
};

export default BckHeader;
