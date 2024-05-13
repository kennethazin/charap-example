export interface ExploreProps {
  onClick: () => void;
}

export function Explore({ onClick }: ExploreProps) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
      onClick={onClick}
    >
      Explore More
      <span className="ml-2 animate-bounce">
        <ArrowDownIcon className="h-5 w-5" />
      </span>
    </button>
  );
}

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  // Add any additional props you need
}

function ArrowDownIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
