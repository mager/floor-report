import React from 'react';
import Image from 'next/image';

import FloorPrice from '../../components/FloorPrice';
import {CollectionT} from '../../types';

type Props = {
  collection: CollectionT;
};

const Collection = ({collection}: Props) => {
  return (
    <div>
      <div>
        {collection.thumb && (
          <div>
            <Image
              alt={collection.name}
              src={collection.thumb}
              width="64"
              height="64"
            />
          </div>
        )}
        <div>
          {collection.name}
          <em>x{collection.numOwned}</em>
        </div>
      </div>
      <div>
        <FloorPrice floor={collection.floor} />
      </div>
    </div>
  );
};

export default Collection;
