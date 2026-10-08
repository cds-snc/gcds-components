<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { GcdsHeading, GcdsNav } from '@gcds-core/components-vue';

const route = useRoute();
const page = computed(() => route.params.page || 'home');

const topNavItems = [
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

const sideNavItems = [
  { label: 'Start to use', href: '/navigation/start' },
  {
    label: 'Components',
    children: [
      { label: 'Alert', href: '/navigation/alert' },
      { label: 'Button', href: '/navigation/button' },
    ],
  },
];
</script>

<template>
  <GcdsNav variant="top" label="Top navigation" :items="topNavItems" />
  <div class="d-flex gap-400 mt-400">
    <GcdsNav variant="side" label="Section navigation" :items="sideNavItems" />
    <div>
      <GcdsHeading tag="h1">Navigation: {{ page }}</GcdsHeading>
    </div>
  </div>
</template>
