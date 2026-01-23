import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="AzureAnimations/AzureAnimations.github.io"
      repoId="R_kgDONFk-Kg"
      category="Announcements"
      categoryId="DIC_kwDONFk-Ks4CtfS2"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  );
}
