import { render, screen } from '@testing-library/react';
import React from 'react';
import Popular from '../components/Popular/Popular';
import '@testing-library/jest-dom';

describe('<Popular />', () => {
  test('should show popular information', async () => {
    const popular = [
      {
        id: 10,
        instantPrice: '4.45 ETH',
        highestBid: '0.010 ETH',
        author: 'Fernando Medina',
        authorAvatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/07_xrihyb.png',
        type: 'Art',
        stock: 1,
        likes: 2,
        createdAt: '2022-06-05T11:42:33.000Z',
        endsAt: '2022-08-06T11:42:33.000Z',
        media: {
          id: 4,
          image:
            'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121559/NFPAISANOS/img_125_mrxfbh.png',
          image2x:
            'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1500/v1657121559/NFPAISANOS/img_125_mrxfbh.png',
        },
        attributes: {
          id: 4,
          color: 'black',
          type: 'epic',
        },
        bidUsers: [
          {
            id: 6,
            name: 'Sofia Coolen',
            avatar:
              'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/05_rdi4su.png',
          },
          {
            id: 7,
            name: 'Martin Acosta',
            avatar:
              'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/04_uunxgl.png',
          },
        ],
      },
    ];
    const ethPrice = {
      eth: '1.00',
      usd: '1,133.52',
    };
    render(
      <Popular popular={popular} ethPrice={ethPrice.usd.toString()} />
    );
    const popularTitle = await screen.findByText(
      'the creator network'
    );
    expect(popularTitle).toBeInTheDocument();
    const popularCreator = await screen.findByText('Fernando Medina');
    expect(popularCreator).toBeInTheDocument();
    const instantPrice = await screen.findByText('4.45 ETH');
    expect(instantPrice).toBeInTheDocument();
    const highestBid = await screen.findByText('0.010 ETH');
    expect(highestBid).toBeInTheDocument();
    const highestBidInUsd = await screen.findByText('$11.3352');
    expect(highestBidInUsd).toBeInTheDocument();
  });
});
