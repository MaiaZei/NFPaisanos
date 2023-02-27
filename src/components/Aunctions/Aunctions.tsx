import Image from 'next/image';
import { AunctionProps } from '../types/AunctionTypes';
import { AunctionsGrid } from './styles';

type AunctionsProps = {
  aunctions: AunctionProps[];
  sortBy: string;
  priceRange: number;
  filterByType: string;
};

const Aunctions = (props: AunctionsProps) => {
  return (
    <div>
      <p>Aunctions</p>

      <AunctionsGrid>
        {props.aunctions
          .sort((a, b) =>
            props.sortBy === 'newest'
              ? new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
              : new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
          )
          .filter(
            (aunction) =>
              parseFloat(
                aunction.instantPrice.substring(
                  0,
                  aunction.instantPrice.length - 3
                )
              ) <= props.priceRange
          )
          .map((aunction) => {
            return (
              <div key={aunction.id}>
                <div>
                  <Image
                    src={aunction.media.image}
                    alt={aunction.type}
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                  <p>{aunction.type}</p>
                  <p>{aunction.author}</p>
                  <p>{aunction.instantPrice}</p>
                </div>
              </div>
            );
          })}
      </AunctionsGrid>
    </div>
  );
};

export default Aunctions;
