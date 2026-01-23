import React from 'react';
import DocItem from '@theme-original/DocItem';
import GiscusComponent from '@site/src/components/GiscusComponent';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <div style={{ marginTop: '3rem' }}>
        <GiscusComponent />
      </div>
    </>
  );
}
