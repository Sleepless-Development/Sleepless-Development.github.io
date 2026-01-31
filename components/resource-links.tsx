import React from 'react';
import { GhButton, DocButton, ReleaseButton, TebexButton } from './button';

interface Props {
  children?: React.ReactNode;
  repo: string;
  docs?: string;
}

interface PaidProps {
  children?: React.ReactNode;
  tebex: string;
  docs?: string;
}

const ResourceLinks = ({ repo, docs }: Props) => {
  return (
    <div className="flex flex-wrap gap-1">
      <GhButton link={repo} />
      <ReleaseButton link={`${repo}/releases`} />
      {docs && <DocButton link={docs} />}
    </div>
  );
};

export const PaidResourceLinks = ({ tebex, docs }: PaidProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      <TebexButton link={tebex} />
      {docs && <DocButton link={docs} />}
    </div>
  );
};

export default ResourceLinks;
