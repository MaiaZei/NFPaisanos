import Image from 'next/image';
import { AunctionProps } from '../types/AunctionTypes';
import {
  AunctionContainer,
  AunctionImage,
  AunctionsGrid,
  HoverThings,
  PlaceBidButton,
  PlaceBidButtonContent,
  PlaceBidButtonText,
  Type,
  WishlistIcon,
} from './styles';
import AddToWishList from './assets/addToWishlist.svg';
import { motion } from 'framer-motion';

import PlaceBidIcon from './assets/PlaceBidIcon.svg';

type AunctionsProps = {
  aunctions: AunctionProps[];
  sortBy: string;
  priceRange: number;
  filterByType: string;
};

const Aunctions = (props: AunctionsProps) => {
  return (
    <div style={{ width: '100%' }}>
      <p>Aunctions</p>

      <AunctionsGrid>
        {props.aunctions
          .sort((a, b) =>
            props.sortBy === 'Newest'
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
              <AunctionContainer>
                <HoverThings>
                  <div
                    style={{
                      margin: '10px 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Type color={aunction.attributes.color}>
                      {aunction.attributes.type}
                    </Type>
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        translateX: '1px',
                        translateY: '1px',
                        translateZ: '1px',
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <WishlistIcon
                        src={AddToWishList}
                        alt="add to wish list"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    style={{
                      backgroundColor: '#3772FF',
                      borderRadius: '20px',
                      padding: '10px',
                      width: '70%',
                      height: 'fit-content',
                      margin: '0 auto',
                    }}
                    whileHover={{ backgroundColor: '#1c429c' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <PlaceBidButton>
                      <PlaceBidButtonContent>
                        <PlaceBidButtonText>
                          Place a bid
                        </PlaceBidButtonText>
                        <Image
                          src={PlaceBidIcon}
                          alt="place bid"
                          width={20}
                          height={20}
                        />
                      </PlaceBidButtonContent>
                    </PlaceBidButton>
                  </motion.div>
                </HoverThings>
                <AunctionImage
                  src={aunction.media.image}
                  alt={aunction.type}
                  width={300}
                  height={300}
                />
                <div>
                  <p>{aunction.type}</p>
                  <p>{aunction.author}</p>
                  <p>{aunction.instantPrice}</p>
                </div>
              </AunctionContainer>
            );
          })}
      </AunctionsGrid>
    </div>
  );
};

export default Aunctions;
