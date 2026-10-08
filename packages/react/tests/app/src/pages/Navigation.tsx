import { useParams } from 'react-router-dom';
import { GcdsHeading, GcdsNav } from '@gcds-core/components-react';
import type { NavItem } from '@gcds-core/components-react';

const topNavItems: NavItem[] = [
  { label: 'Navigation test', href: '/navigation', home: true },
  { label: 'Products', href: '/navigation/products' },
  { label: 'About', href: '/navigation/about' },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', href: '/navigation/blog' },
      { label: 'Guides', href: '/navigation/guides' },
    ],
  },
  { label: 'Canada.ca', href: 'https://www.canada.ca/', external: true },
];

const sideNavItems: NavItem[] = [
  { label: 'Start to use', href: '/navigation/start' },
  {
    label: 'Components',
    children: [
      { label: 'Alert', href: '/navigation/alert' },
      { label: 'Button', href: '/navigation/button' },
    ],
  },
];

const Navigation = () => {
  const { page = 'home' } = useParams();

  return (
    <>
      <GcdsNav variant="top" label="Top navigation" items={topNavItems} />
      <div className="d-flex gap-400 mt-400">
        <GcdsNav variant="side" label="Section navigation" items={sideNavItems} />
        <div>
          <GcdsHeading tag="h1">{`Navigation: ${page}`}</GcdsHeading>
        </div>
      </div>
    </>
  );
};

export default Navigation;
