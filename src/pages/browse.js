import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
    const { matches } = useContent('matches');
    const { highlights } = useContent('highlights');
    const slides = selectionFilter({ matches, highlights });
   
    return <BrowseContainer slides={slides} />;
}