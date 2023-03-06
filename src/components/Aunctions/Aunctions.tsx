import Image from 'next/image';
import { AunctionProps } from '../types/AunctionTypes';
import {
  AuctionBottomInformationContainer,
  AuctionInstantPrice,
  AuctionTitle,
  AunctionContainer,
  AunctionImage,
  AunctionsGrid,
  BidLabel,
  BidText,
  BidUserImage,
  BidUsersContainer,
  HoverThings,
  PlaceBidButton,
  PlaceBidButtonContent,
  PlaceBidButtonText,
  RowDiv,
  StockLabel,
  Type,
  WishlistIcon,
} from './styles';
import AddToWishList from './assets/addToWishlist.svg';
import { motion } from 'framer-motion';
import HighestBidIcon from './assets/HighestBidIcon.svg';

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
          .filter((aunction) =>
            props.filterByType !== 'All items'
              ? aunction.type === props.filterByType
              : true
          )
          .map((aunction) => {
            return (
              <AunctionContainer key={aunction.id}>
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
                  priority
                />
                <AuctionBottomInformationContainer>
                  <RowDiv>
                    <AuctionTitle>Amazing digital art</AuctionTitle>
                    <AuctionInstantPrice>
                      {aunction.instantPrice}
                    </AuctionInstantPrice>
                  </RowDiv>
                  <RowDiv>
                    <BidUsersContainer>
                      {aunction.bidUsers.map((user, index) => {
                        return (
                          <BidUserImage
                            key={user.id}
                            src={user.avatar}
                            alt={user.id.toString()}
                            width={24}
                            height={24}
                            left={index}
                          />
                        );
                      })}
                    </BidUsersContainer>
                    <StockLabel>{aunction.stock} in stock</StockLabel>
                  </RowDiv>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderTop: '1px solid #777e91',
                      paddingTop: '10px',
                      marginTop: '10px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      <BidLabel style={{ display: 'flex' }}>
                        <Image
                          src={HighestBidIcon}
                          alt="highest bid"
                          width={20}
                          height={20}
                        />
                        Highest Bid:
                      </BidLabel>
                      <BidText>{aunction.highestBid}</BidText>
                    </div>
                    <BidLabel>New bid🔥</BidLabel>
                  </div>
                </AuctionBottomInformationContainer>
              </AunctionContainer>
            );
          })}
      </AunctionsGrid>
    </div>
  );
};

export default Aunctions;
