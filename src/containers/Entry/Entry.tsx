import useEntry from 'hooks/useEntry';
import { useParams } from 'react-router-dom';

const Entry = () => {
  const query = useParams();
  const { data, isLoading, error } = useEntry(+query.id!);

  if (error) return <p>{(error as Error)?.message}</p>;

  console.log(data);

  return <>{JSON.stringify(data)}</>;
};

export default Entry;