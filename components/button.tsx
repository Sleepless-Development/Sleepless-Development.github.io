import React, { ReactNode } from 'react';
import { IconBrandGithub, IconTag, IconFileText, IconDownload, IconBrandNpm } from '@tabler/icons-react';

interface Props {
  icon?: JSX.Element;
  children?: ReactNode;
  side?: 'left' | 'right';
  link?: string;
  label?: string;
}

const Button = ({ side = 'left', children, icon, link }: Props) => {
  return (
    <div className="h-fit w-fit">
      <a href={link}>
        <div className="flex w-26 items-center justify-center gap-1.5 rounded-sm border border-black p-1.5 text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-2">
          {side === 'left' && icon}
          {children}
          {side === 'right' && icon}
        </div>
      </a>
    </div>
  );
};

export default Button;

export function GhButton({ side, link, label }: Props) {
  return (
    <Button icon={<IconBrandGithub />} side={side} link={link}>
      {label || "Github"}
    </Button>
  );
}

export function DocButton({ side, link, label }: Props) {
  return (
    <Button icon={<IconFileText />} side={side} link={link}>
      {label || "Documentation"}
    </Button>
  );
}

export function DownloadButton({ side, link, label }: Props) {
  return (
    <Button icon={<IconDownload />} side={side} link={link}>
      {label || "Download"}
    </Button>
  );
}

export function ReleaseButton({ side, link, label }: Props) {
  return (
    <Button icon={<IconTag />} side={side} link={link}>
      {label || "Releases"}
    </Button>
  );
}

export function NpmButton({ side, link, label }: Props) {
  return (
    <Button icon={<IconBrandNpm />} side={side} link={link}>
      {label || "Package"}
    </Button>
  );
}
