import React from 'react';
import { Building, FloorMap } from '@/types';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import styles from '@/styles/BuildingSearchResults.module.css';
import clsx from 'clsx';

export interface BuildingSearchResultsProps {
  query: string;
  building: Building;
  floorMap: FloorMap;
  onSelectBuilding: (selectedBuilding: Building) => void;
}

export default function BuildingSearchResults({
  query,
  building,
  floorMap,
  onSelectBuilding,
}: BuildingSearchResultsProps) {
  return (
    <button
      type="button"
      className={clsx(
        styles['search-list-element'],
        styles['search-list-element-building'],
      )}
      onClick={() => onSelectBuilding(building)}
    >
      <span className="floor-roundel">
        {building.code}
      </span>
      <span
        className={styles['search-list-element-title']}
      >
        {building.name}
      </span>
      <ChevronRightIcon className={styles['search-list-arrow']} />
    </button>
  );
}
