/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-paginator/docs/README.md';
import { version } from 'terra-paginator/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import PaginatorSrc from '!raw-loader!terra-paginator/src/Paginator';

// Example Files
import SearchPaginatorExample from './SearchPaginatorExample';

const PaginatorExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={PaginatorSrc} />
    <h2>Search Paginator Example</h2>
    <SearchPaginatorExample />
  </div>
);

export default PaginatorExamples;
