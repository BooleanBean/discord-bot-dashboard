import ArrowLink from "#/components/links/ArrowLink";
import PrimaryLink from "#/components/links/PrimaryLink";

type Props = {
  title?: string;
  titleOpacity: number;
};

const BckHeader: React.FC<Props> = ({ title, titleOpacity }) => {
  return (
    <div className="sticky top-0 z-10 bg-black bg-opacity-40 backdrop-blur-lg backdrop-filter">
      <div className="container mx-auto flex h-14 items-center px-2">
        <ArrowLink as={PrimaryLink} href="/" direction="left">
          Back to home
        </ArrowLink>
        <h4
          style={{ opacity: titleOpacity }}
          className="mx-auto -translate-x-1/2 transition duration-200"
        >
          {title && title}
        </h4>
      </div>
      <div
        style={{ opacity: titleOpacity }}
        className="absolute bottom-0 h-px w-full bg-tw-border transition-all duration-200"
      />
    </div>
  );
};

export default BckHeader;
