import { Loader as LoaderIcon } from 'react-feather';

interface LoaderProps {
  message?: string;
}

export const Loader = ({ message }: LoaderProps) => (
  <div className="flex">
    <LoaderIcon className="animate-spin mr-2" />
    <span className="animate-pulse font-semibold">{message}</span>
  </div>
);

export default Loader;
