import React from 'react';
import {
  IconBrandGithub,
  IconTag,
  IconFileText,
  IconDownload,
  IconBrandNpm,
  IconShoppingCart,
} from '@tabler/icons-react';

interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  side?: 'left' | 'right';
  link?: string;
  label?: string;
}

const Button: React.FC<Props> = ({ side = 'left', children, icon, link }: Props) => {
  return (
    <div className="h-fit w-fit">
      <a href={link}>
        <div className="w-26 mt-2 flex items-center justify-center gap-1.5 rounded-sm border border-black p-1.5 text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
          {side === 'left' && <div>{icon}</div>}
          {children}
          {side === 'right' && <div>{icon}</div>}
        </div>
      </a>
    </div>
  );
};

export default Button;

export function GhButton(props: Props) {
  return (
    <Button icon={<IconBrandGithub />} side={props.side} link={props.link}>
      {props.label || 'Github'}
    </Button>
  );
}

export function DocButton(props: Props) {
  return (
    <Button icon={<IconFileText />} side={props.side} link={props.link}>
      {props.label || 'Documentation'}
    </Button>
  );
}

export function DownloadButton(props: Props) {
  return (
    <Button icon={<IconDownload />} side={props.side} link={props.link}>
      {props.label || 'Download'}
    </Button>
  );
}

export function ReleaseButton(props: Props) {
  return (
    <Button icon={<IconTag />} side={props.side} link={props.link}>
      {props.label || 'Releases'}
    </Button>
  );
}

export function NpmButton(props: Props) {
  return (
    <Button icon={<IconBrandNpm />} side={props.side} link={props.link}>
      {props.label || 'Package'}
    </Button>
  );
}

export function TebexButton(props: Props) {
  return (
    <Button icon={<IconShoppingCart />} side={props.side} link={props.link}>
      {props.label || 'Purchase'}
    </Button>
  );
}
